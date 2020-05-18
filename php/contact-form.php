<?php

function customValidation($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
function IsNullOrEmptyString($str) {
    return (!isset($str) || trim($str)==='');
}

$to = "real2reelmm@gmail.com";	// Recipient's email address
//$subject = 'Real-2-Reel Contact-Form'; 	// Email subject	
					
$name = customValidation($_REQUEST['contact_name']);				// Sender's name
$email = customValidation($_REQUEST['contact_email']);			// Sender's email address
$message = customValidation($_REQUEST['contact_message']);	// Contact form message
$subject = customValidation($_REQUEST['subject']) . " from $email";


if (IsNullOrEmptyString($name)) {
	echo "Please enter your name."; // invalid email address
	return false;
} else if (IsNullOrEmptyString($message)) {
	echo "Please enter your message."; // invalid email address
	return false;
} else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	echo "Invalid Email Address"; // invalid email address
	return false;
} else {
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= "Reply-to: ".$email."\r\n";
	$headers .= "From: ". $name ." <" . "themllr@gmail.com" . ">\r\n"; // Sender's email address
	
	mail($to, $subject, $message, $headers);
	// Transfer the value 'sent' to ajax function for showing success message.
	echo 'sent';
}
?>