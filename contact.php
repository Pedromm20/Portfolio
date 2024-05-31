<?php
session_start();

if (!isset($_SESSION['visited'])) {
    $_SESSION['visited'] = true;
    $file = 'visits.txt';
    if (file_exists($file)) {
        $count = file_get_contents($file);
        $count = intval($count) + 1;
    } else {
        $count = 1;
    }
    file_put_contents($file, $count);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);
    $company = htmlspecialchars($_POST['company']);
    $message = htmlspecialchars($_POST['message']);
    
    if (empty($name) || empty($email) || empty($phone) || empty($address) || empty($company) || empty($message)) {
        echo "Todos los campos son obligatorios.";
    } else {
        // Enviar correo de confirmación
        $to = $email;
        $subject = "Confirmación de Recepción de Mensaje";
        $body = "Hola $name,\n\nHemos recibido su mensaje. Aquí están los detalles:\n\nNombre: $name\nCorreo Electrónico: $email\nTeléfono: $phone\nDirección: $address\nEmpresa: $company\nMensaje: $message\n\nGracias por contactarnos.";
        $headers = "From: no-reply@tu-dominio.com";

        if (mail($to, $subject, $body, $headers)) {
            echo "Gracias, $name. Hemos recibido su mensaje.";
        } else {
            echo "Hubo un error al enviar el correo de confirmación.";
        }
    }
}

echo "<p>Visitor count: " . file_get_contents('visits.txt') . "</p>";
?>
