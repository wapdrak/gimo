<!DOCTYPE html>
<html lang="he" dir="auto">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>מחשבון מע"מ</title>
<meta name=”description” content=””>
	
	<link href="//gimo.co.il/url/css/main.css" rel="stylesheet" type="text/css">
	<link href="//gimo.co.il/url/css/menu.css" rel="stylesheet" type="text/css">
	<link href="//gimo.co.il/url/css/alert.css" rel="stylesheet" type="text/css">

	<link rel="manifest" href="//gimo.co.il/url/machshevon/manifest.webmanifest">
    <link rel="icon" type="image/png" sizes="256x256" href="//gimo.co.il/url/machshevon/calc-256x256.png">
    <link href="//gimo.co.il/url/machshevon/calc.css" rel="stylesheet" />
	
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" rel="stylesheet" type="text/css">	

    <link href="//cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.4/jquery-confirm.min.css" rel="stylesheet" type="text/css">
	<link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="//cdnjs.cloudflare.com/ajax/libs/darktooltip/0.4.0/darktooltip.css" rel="stylesheet" integrity="sha256-iUSsNDglmpCfXPhSCkCqFcc3Yxk38nMMQ2yay2nj7HI=" crossorigin="anonymous" />
    <link href="//cdnjs.cloudflare.com/ajax/libs/darktooltip/0.4.0/darktooltip.min.css" rel="stylesheet" integrity="sha256-WwVGVh8HqYgmCywEexbOSwDqI98IQx1nzac6kgudN1U=" crossorigin="anonymous" />


	<link href="//www.w3schools.com/w3css/4/w3.css" rel="stylesheet">
    <link href="//fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="//fonts.googleapis.com/css?family=Michroma" rel="stylesheet" type="text/css">

	<script src="//gimo.co.il/url/wa/index.js" defer></script>
	<script src="//gimo.co.il/url/machshevon/calc.js"></script>
    <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<script src='//code.responsivevoice.org/responsivevoice.js'></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.4/jquery-confirm.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/darktooltip/0.4.0/jquery.darktooltip.js" integrity="sha256-X41tk6SQVn7zuraZDRHib4xvexSxk/gkxze7Vz+Q68Y=" crossorigin="anonymous"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/darktooltip/0.4.0/jquery.darktooltip.min.js" integrity="sha256-lQ/JLVkQzALa/AI/Z3iwtIYNWj9F3rgIPpQCK2j5IOI=" crossorigin="anonymous"></script>
    <script src='//kit.fontawesome.com/a076d05399.js'></script>

</head>

<body>

<div class="center border4px bordergroove borderblack radius25px marginn2 margind2 marginl10 marginp10">
<script src="//gimo.co.il/url/machshevon/machshevon.js"></script>

<h1>₪ מחשבון מע"מ</h1>
<br>
    <form>
<label for="novat">
        מחיר לא כולל מע"מ:
</label><br>
		➖<input oninput="sumTotal()" type="number" name="novat" id="novat" class="border4px bordergroove borderblack radius10px margin1">➖
		<br>
		
<label for="vat">
        מחיר כולל מע"מ:
</label><br>
		➕<input oninput="sumnovat()" type="number" name="vat" id="vat" class="border4px bordergroove borderblack radius10px margin1">➕
        <input type="hidden" name="sum"><br>
    <input type="reset" value="&#xf021; איפוס" class="fa border4px bordergroove borderblack radius10px margin1" title="&#xf021; איפוס מלא">
    </form>

</div>

</body>
</html>