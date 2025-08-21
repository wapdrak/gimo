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
	
<?php include '../head/index.php';?>

</head>

<body onload="barcode();">

<header class="topnav bordersolid border2px right" id="myTopnav">
<?php include '../header/index.php';?>
</header>

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


<div>

<script>
function barcode() {
  var x = document.getElementById("newbarcode").value;
  var url = "https://www.ean-search.org/barcode/";
  var y = document.getElementById("hidden").value;
   
  document.getElementById("hidden").value= x + " ";
  document.getElementById("imagebarcode").src=url+y+" ";
  document.getElementById("imagebarcode").alt="ברקוד: "+y;
  document.getElementById("linkbarcode").href=url+y+" ";
  document.getElementById("linkbarcode").title="ברקוד: "+y;
}
</script>

<br><br>

<input id="newbarcode" title="יש להזין ברקוד הרצוי ולאחר להוסיף רווח" oninput="barcode();" placeholder="ברקוד+רווח" autofocus />
<input id="hidden" type="hidden" value="000486505070">
<br><br>
<img id="imagebarcode" width="204" height="100" src="" border="0" alt="">
<br><br>
<button class="fas marginlauto marginpauto white bblack radius10px border4px margin2px padding2px" style="font-size:200%;">
<a id="linkbarcode" href="" title="">&#xf019; הורדה</a>
</button>
<button onclick="location.reload();" class="fa marginlauto marginpauto white bblack radius10px border4px margin2px padding2px" title="איפוס" style="font-size:200%;">&#xf021; איפוס</button>
<br><br>
</div>
 
<footer class="byellow center">
<?php include '../share/share.php';?>
</footer>

</body>
</html>