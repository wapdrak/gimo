<?php
$kid = $_GET['b'];
$tel = $_GET['n'];
$text = urlencode($_GET['t']);

header("Location: https://api.whatsapp.com/send?phone=" . $kid . $tel . "&text=" . $text);
exit;
?>