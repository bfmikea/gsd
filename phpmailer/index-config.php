<?php

if(isset($_POST['email'])) {
    
include "class.phpmailer.php";
include "class.smtp.php";
$email_user = "bfmikea@gmail.com";
$email_password = "adminict5.09";
$the_subject = "Lanzamiento del sitio GSD";
$address_to = "mbarrera@ismm.edu.cu";
$from_name = "GSD";
$phpmailer = new PHPMailer();
// // ---------- datos de la cuenta de Gmail -------------------------------
$phpmailer->Username = $email_user;
$phpmailer->Password = $email_password;
// //-----------------------------------------------------------------------
// //$phpmailer->SMTPDebug = 1;
$phpmailer->SMTPSecure = 'ssl';
$phpmailer->Host = "smtp.gmail.com"; // GMail
$phpmailer->Port = 465;
$phpmailer->IsSMTP(); // use SMTP
$phpmailer->SMTPAuth = true;
$phpmailer->setFrom($phpmailer->Username,$from_name);
$phpmailer->AddAddress($address_to); // recipients email
$phpmailer->Subject = $the_subject;
$phpmailer->Body .="<h1 style='color:#3498db;'>Hola...!</h1>";
$phpmailer->Body .= "<p>Al usuario con correo: ".$_POST['email']." le interesa ser avisado cuando se realice el lanzamiento del sitio. </p>";
$phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
$phpmailer->IsHTML(true);
$phpmailer->Send();

}
echo json_encode( $_POST['email'] ) ;
?>





