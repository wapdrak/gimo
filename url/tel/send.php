<?php
$kid = $_GET['b'];
$tel = $_GET['n'];
$text = urlencode($_GET['t']);

header("Location: tel:+" . $kid . $tel . $text);
exit;
?>