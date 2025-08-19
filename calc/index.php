<!DOCTYPE html>
<html lang="he" dir="auto">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>מחשבון פשוט |חשבון מע"מ | מחשבון אחוזים | גימו בע"מ - ציוד משרדי | חותמות | ראשי דיו</title>
<meta name=”description” content=””>

	<link rel="manifest" href="//gimo.co.il/url/machshevon/manifest.webmanifest">
    <link rel="icon" type="image/png" sizes="256x256" href="//gimo.co.il/url/machshevon/calc-256x256.png">
    <link href="//gimo.co.il/url/machshevon/calc.css" rel="stylesheet" />
	
	<script src="//gimo.co.il/url/machshevon/calc.js"></script>
	
<?php include '../head/index.php';?>

</head>

<body>

<header class="topnav bordersolid border2px right" id="myTopnav">
<?php include '../header/index.php';?>
</header>

<div>

<iframe id="machshevon" src="//gimo.co.il/url/machshevon/vat/iframe.php" frameborder="0" onload="resizeIframe(this)">

</iframe>
	
</div>

<span>
<button onclick="changeSrc();" class="marginlauto marginpauto white yellowh bblack radius10px border4px margin2px padding2px" style="font-size:130%;">מחשבון פשוט</button>
<button onclick="changeSrc2();" class="marginlauto marginpauto white yellowh bblack radius10px border4px margin2px padding2px" style="font-size:130%;">מחשבון מע"מ</button>
<button onclick="changeSrc3();" class="marginlauto marginpauto white yellowh bblack radius10px border4px margin2px padding2px" style="font-size:130%;">מחשבון אחוזים</button>
<span>

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