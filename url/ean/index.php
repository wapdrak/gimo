<!DOCTYPE html>
<html lang="he" dir="auto">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>ברקודים | גימו בע"מ - ציוד משרדי | חותמות | ראשי דיו</title>
<meta name=”description” content=””>

	<link rel="manifest" href="//gimo.co.il/url/ean/manifest.webmanifest">
    <link rel="icon" type="image/png" sizes="225x225" href="//gimo.co.il/url/ean/barcode5.png">
    <link href="//gimo.co.il/url/machshevon/calc.css" rel="stylesheet" />
	
    <script src="//gimo.co.il/url/ean/ean1.js"></script>
	
<?php include '../head/index.php';?>

</head>

<body onload="barcode();">

<header class="topnav bordersolid border2px right" id="myTopnav">
<?php include '../header/index.php';?>
</header>

<section class="center border4px bordergroove borderblack radius25px margin5 paddingauto">

<h1>
<i style="color:blue;" class="fa">&#xf02a;</i>
יצירת תמונת ברקוד של מוצרים
</h1>
<h2>
הורדת תמונת ברקוד של המוצר
</h2>

<div title="עזרה:&#13;&#10;יש להזין ברקוד הרצוי ולאחר להוסיף רווח">
<i class="material-icons">&#xe887;</i>
יש להזין ברקוד הרצוי ולאחר להוסיף רווח
</div>

<br><br>

<input id="newbarcode" title="יש להזין ברקוד הרצוי ולאחר להוסיף רווח" oninput="barcode();" placeholder="ברקוד+רווח" autofocus />
<input id="hidden" type="hidden" value="048650507">
<br><br>
<img id="imagebarcode" width="204" height="100" src="" alt="" title="">
<br><br>

<button id="linkbarcode" type="button" onclick="barcodelink();" class="fas marginlauto marginpauto white yellowh bblack radius10px border4px margin2px padding2px" title="הורדה" style="font-size:200%;">&#xf019; הורדה</button>
<button type="button" onclick="printshare();return false" class="fa marginlauto marginpauto white yellowh bblack radius10px border4px margin2px padding2px" title="הדפסה" style="font-size:200%;">&#xf02f; הדפסה</button>
<button onclick="location.reload();" class="fa marginlauto marginpauto white yellowh bblack radius10px border4px margin2px padding2px" title="איפוס" style="font-size:200%;">&#xf021; איפוס</button>
<br><br>

</section>

<footer class="byellow center">
<?php include '../share/share.php';?>
</footer>

</body>
</html>