<?php
$first_name = ""; 
$last_name = ""; 
$email = ""; 
$message = ""; 
$error = false;

if (isset($_POST["Submit"])) {

    $first_name = $_POST["First_name"]; // required
    $last_name = $_POST["Last_name"]; // required
    $email = $_POST["Email"]; // required
    $message = $_POST["Message"]; // required

    function problem($error)
    {
        echo "We're sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST["First Name"]) ||
        !isset($_POST["Last Name"]) ||
        !isset($_POST["Email"]) ||
        !isset($_POST["Message"])
    ) {
        problem("We're sorry, but there appears to be a problem with the form you submitted.");
    }


    $error_message = "";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message .= "The Email address you entered does not appear to be valid.<br>";
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $first_name)) {
        $error_message .= "The Name you entered does not appear to be valid.<br>";
    }
    if (!preg_match($string_exp, $last_name)) {
        $error_message .= "The Name you entered does not appear to be valid.<br>";
    }

    if (strlen($message) < 2) {
        $error_message .= "The Message you entered do not appear to be valid.<br>";
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "First Name: " . clean_string($first_name) . "\n";
    $email_message .= "Last Name: " . clean_string($last_name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";

    $email_to = "adai24@gatech.edu";
    $email_subject = "Contact from website";

    // create email headers
    $headers = "From: " . $email . "\r\n" .
        "Reply-To: " . $email . "\r\n" .
        "X-Mailer: PHP/" . phpversion();
    mail($email_to, $email_subject, $email_message, $headers);
    echo "<br/>Subject: ".$email_subject."<br/><hr><br/>".$email_message;  
?>

    Thanks for getting in touch. We"ll get back to you soon.

<?php
}
?>