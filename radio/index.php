<!DOCTYPE html>
<html lang="he" dir="auto">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>און ליין רדיו</title>
<meta name=”description” content=””>

	<link rel="manifest" href="//gimo.co.il/url/radio/manifest.webmanifest">
    <link rel="icon" type="image/png" sizes="256x256" href="//gimo.co.il/url/radio/radio.png">
	<link href="//gimo.co.il/url/css/radio.css" rel="stylesheet" type="text/css">
	
	<script src="//gimo.co.il/url/radio/radio.js"></script>

<?php include '../head/index.php';?>

</head>

<body onload="javascript:hudba();">

<header class="topnav bordersolid border2px right" id="myTopnav">
<?php include '../header/index.php';?>
</header>

<div class="center">

<!--Online hudba-->
<div id="zobrazradio" class="stin" onload="javascript:hudba();" title="Rádio přehrávač online">
<button type="button" class="button" onclick="javascript:hudba();" onmouseover="javascript:hudba();">Online rádio....</button>
</div>
<script src="/radio.js"></script>
<noscript>
Váš prohlížeč nepodporuje, nebo nemáte povoleny javascripty
</noscript>
<!--Online hudba konec-->
	
</div>


<button type="button" class="add material-icons marginlauto marginpauto white yellowh bblack radius10px border4px margin2px padding2px" title="הוספה לשולחן עבודה" style="font-size:130%;">&#xe148; הוספה לשולחן עבודה</button>
	<script>
 if ('serviceWorker' in navigator) {
    console.log("Will the service worker register?");
    navigator.serviceWorker.register("//gimo.co.il/url/wa/service-worker.js")
      .then(function(reg){
        console.log("Yes, it did.");
     }).catch(function(err) {
        console.log("No it didn't. This happened:", err)
    });
 }
</script>

<footer class="byellow center">
<?php include '../share/share.php';?>
</footer>

</body>
</html>