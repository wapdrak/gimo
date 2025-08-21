<?php
$kid = $_GET['b'];
$tel = $_GET['n'];
$text = urlencode($_GET['t']);

header("Location: sms:+" . $kid . $tel . "?body=" . $text);
exit;
?>