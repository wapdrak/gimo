<?php
require_once('ctxt.php');

$vc = new txt();

foreach ($_GET as $key=>$val) {
  $vc->data[$key] = $val;
}

$vc->download();

?>