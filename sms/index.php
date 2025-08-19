<?php
$sms = $_GET['n'];
header("Location: sms:" . $sms);
exit;
?>