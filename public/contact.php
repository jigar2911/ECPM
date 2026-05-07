<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $name = $data['name'] ?? 'Not provided';
    $email = $data['email'] ?? 'Not provided';
    $phone = $data['phone'] ?? 'Not provided';
    $address = $data['address'] ?? 'Not provided';
    $service = $data['service'] ?? 'Not provided';
    $details = $data['details'] ?? 'No details provided';

    $to = "info@earthcaremaintenance.co.nz";
    $subject = "New Quote Request: $service from $name";

    $message = "You have received a new quote request from your website.\n\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Address: $address\n";
    $message .= "Service: $service\n\n";
    $message .= "Details:\n$details\n";

    $headers = "From: webmaster@earthcaremaintenance.co.nz\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Mail sent"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Mail failed"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
