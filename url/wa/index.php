<!DOCTYPE html>
<html lang="he" dir="auto">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>&#128488; שליחת הודעות ואטסאפ לכל מספר מבלי לשמור אותו בספר הטלפון | גימו בע"מ | ציוד משרדי | חותמות במקום</title>

    <link rel="icon" type="image/png" sizes="192x192" href="//gimo.co.il/url/img/whatsapp-lilach2.png">
	<link rel="manifest" href="//gimo.co.il/url/wa/manifest.webmanifest">
		
<?php include '../head/index.php';?>

</head>

<body onload="wa2();" class="bdark bwhatsapp">

<header class="topnav bordersolid border2px right" id="myTopnav">
<?php include '../header/index.php';?>
</header>

<div class="center border4px bordergroove borderblack radius25px margin1 paddingauto white">

<section>
<h1>
<i style="color:limegreen;" class="fab">&#xf232;</i>
הודעות ואטסאפ
</h1>
<h2>
שליחה לכל מספר מבלי לשמור אותו בספר הטלפון
</h2>

<div title="עזרה:&#13;&#10;יש להאזין מספר בפורמט בינלאומי עם קידומת בלי 0 - ...972-54, ...972-48 &#13;&#10; - למשל 97248650507">
<i class="material-icons">&#xe887;</i>
יש להאזין מספר בפורמט בינלאומי עם קידומת בלי 0 - ...972-54, ...972-48 -למשל 97248650507
</div>

<form method="get" class="margin1 validace" target="_blank">

<label for="phone" class="vw">
מס' ואטסאפ
</label>

 <br>	
<select id="countries" class="bblack yellow radius5px border4px fsize150 margin2px padding2px" onchange="wa2();">
<?php include 'select.php';?>
</select>


 <br>
 

  <input dir="ltr" id="phone" type="tel" placeholder="מספר טלפון" name="n" size="8" title="מספר טלפון עם קידומת בלי 0 - ..54, ...48  - למשל 48650507" minlength="8" maxlength="9" pattern="((71|72|73|74|75|76|77|79|2|3|4|8|9)[\d]{7})|((50|51|52|53|54|55|56|58|59)[\d]{7})" class="marginlauto marginpauto yellow bblack radius10px pcenter pwhite pblackh border4px marginn2px paddingd2px" style="font-size:200%;" aria-label="Phone number" oninput="wa();" required autofocus />
 <span id="span"></span>
  <input dir="ltr" id="inter" type="tel" placeholder="קידומת" name="b" size="3" title="קידומת בינלאומית" minlength="1" maxlength="3" pattern="[0-9]{1,3}" class="marginlauto marginpauto yellow bblack radius10px pcenter pwhite pblackh border4px marginn2px paddingd2px" style="font-size:200%;width:100px;" required />

  <br>
<textarea name="t" id="text" class="bblack white pwhite pblackh radius15px margin2px padding2px border4px" rows="5" cols="39" placeholder="   תוכן ההודעה... לא חובה" title="תוכן ההודעה... לא חובה" style="font-size:100%;"></textarea>

  <br>
  <input onclick="location.reload();" type="reset" value="&#xf021; איפוס" class="fa marginlauto marginpauto white bblack radius10px border4px margin2px padding2px" title="איפוס" style="font-size:200%;" />
  <button type="submit" formaction="//gimo.co.il/url/wa/send.php" class="fab marginlauto marginpauto limegreen bblack radius10px border4px margin2px padding2px" title="שליחת ואטסאפ" style="font-size:200%;">&nbsp;&nbsp;&#xf232; ואטסאפ&nbsp;&nbsp;</button>
  <br>
  <button type="submit" formaction="//gimo.co.il/url/sms/send.php" class="far marginlauto marginpauto yellow bblack radius10px border4px margin2px padding2px" title="שליחת הודעה" style="font-size:200%;">&nbsp;&nbsp;&#xf4ad; הודעה&nbsp;&nbsp;</button>
  <button type="submit" formaction="//gimo.co.il/url/tel/send.php" class="fas marginlauto marginpauto yellow bblack radius10px border4px margin2px padding2px" title="חיוג" style="font-size:200%;">&nbsp;&nbsp;&#xf095; חיוג&nbsp;&nbsp;</button>

</form>

<script>
function wa2() {
  var x = document.getElementById("countries").value;
    document.getElementById("inter").value = x;

  var y = document.getElementById("countries");
  var ya = y.selectedIndex;
  document.getElementById("totaltitle").innerHTML = y.options[ya].title;

  var a = document.getElementById("countries");
  var aa = a.selectedIndex;
  document.getElementById("totallabel").innerHTML = a.options[aa].label; 
    
  var b = document.getElementById("countries");
  var ba = b.selectedIndex;
  document.getElementById("totaltext").innerHTML = b.options[ba].text;
}

var input = document.getElementById('phone');
var line1 = "המספר שגוי";
var line2 = "- יש ללחוץ על איפוס ולהזין שוב בצורה נכונה מספר בפורמט בינלאומי עם קידומת בלי  סיפרת 0 - ...972-54, ...972-48";
var line3 = "לדוגמה: 97248650507";
var lines = line1 + "\n" + line2 + "\n" + line3;
input.oninvalid = function(event) {
    event.target.setCustomValidity(lines);
	
}

</script>

<button type="button" class="add material-icons bblack white center marginlauto marginpauto marginn2px paddingd2px border4px" title="הוספה לשולחן עבודה" style="font-size:300%;">&#xe148; הוספה לשולחן עבודה</button>

</section>

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
</div>



<footer class="byellow center">
<?php include '../share/share.php';?>
</footer>
</body>
</html>