<?php


/* Email Variables */
$emailSubject = 'Melding fra Nettside'; /*Choose your  own Email Subject */
$webMaster = 'bjarne@mosaikkreklame.no, kjersti@mosaikkreklame.no, mikael@mosaikkreklame.no';/* change this to match yr email address*/



/* Data Variables */
$Fornavn = $_POST['Fornavn'];
$Etternavn = $_POST['Etternavn'];
$Epost = $_POST['Epost'];
$Telefon = $_POST['Telefon'];
$Melding = $_POST['Melding'];


$body = <<<EOD
<p>Fornavn: $Fornavn
<br/>Etternavn: $Etternavn
<br/>Epost: $Epost / Telefon: $Telefon
<p><hr><p>

Melding: <br/> $Melding <p>


EOD;
$headers = "From: $Epost\r\n";
$headers .= "Content-type: text/html\r\n";
$success = mail($webMaster, $emailSubject, $body,
$headers);


/* Results rendered as HTML */
$theResults = <<<EOD
<html>
<head>
<title> Message Sent !</title>
<meta http-equiv="refresh" content="10;URL=http://mosaikkreklame.no/">
<style type="text/css">
<!--
body {
background-color: #333; /* You can edit this CSS to match your website*/
font-family: helvetica;
font-size: 20px;
font-style: normal;
line-height: 30px;
font-weight: normal;
color: #fff;
text-decoration: none;
padding-top: 300px;
margin: 0 auto;
width: 800px;
}

-->
</style>
</head>
<div align="center"> Takk for henvendelsen</div>
</body>
</html>
EOD;
echo "$theResults";
?>
