<?php
$kid = $_GET['b'];
$tel = $_GET['n'];
$text = urlencode($_GET['t']);

header("Location: https://wa.me/" . $kid . $tel . "?text=" . $text);
exit;
?>