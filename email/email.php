<?php

if(isset($_POST['email']) && !empty($_POST['email']))


$nome = addslashes($_POST['nome']); 
$email = addslashes($_POST['email']); 
$mensagem = addslashes($_POST['mensagem']); 


$to = "rangel-3l@hotmail.com";
$subject = "contato -acervo-nerd".
$body = "nome:".$nome. "/r/n" .
$body = "email:".$email. "/n" .
$body = "mensagem:".$mensagem. "/r/n"; 
$header = "from:rangel-3l@gmail.com" . 
"/r/n"."Reply-to:".$email. "/r/n";
"X=Mailer:PHP/".phpversion();
if(mail($to,$subject,$body,$header)){
echo("email enviado com sucesso");
}else( "email não pode ser enviado");

?>