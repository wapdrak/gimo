<?php
$email = $_GET['m'];
$subject = urlencode($_GET['s']);
$text = urlencode($_GET['t']);
header("Location: mailto:" . $email . "?subject=" . $subject . "&body=" . $text);
exit;
?>