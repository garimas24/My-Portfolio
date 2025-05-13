<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Send an email
    $to = 'dixitgarima24@gmail.com'; // Your email address
    $subject = 'New message from contact form';
    $message = "Name: $name\n\nEmail: $email\n\nMobile: $mobile\n\nSubject: $subject\n\nMessage: $message";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    // Redirect back to the contact page
    header('Location: index.html?success=true');
    exit;
} else {
    // If the form is not submitted, redirect back to the contact page
    header('Location: index.html');
    exit;
}
?>
