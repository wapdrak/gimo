<!DOCTYPE html>
<html lang="he" dir="auto">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>מחשבון אחוזים</title>
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

<div class="center paddingauto marginauto">
<script src="//gimo.co.il/url/machshevon/machshevon.js"></script>

<br>
<form name="form1" method="post" class="center paddingauto marginauto">
<table cellspacing="1" cellpadding="1" border="1" align="center" class="center border4px bordergroove borderblack radius25px padding1 marginauto">

  <thead>
  <tr>
    <td align="center" colSpan="3" class="bordernone">
    <h1 title="מחשבון אחוזים">מחשבון אחוזים</h1> 
    </td>
  </tr>
  </thead>
  
  <tbody class="center border4px bordergroove borderblack radius25px" align="center">
  <tr>
    <td class="border1px bordergroove borderblack radius10px" title="מספר אחוזים">
	<span>אחוזים:</span> 
	<input oninput="perc1()" size="5" name="a" class="border1px bordergroove borderwhite radius10px">
	<span>%</span> 
	</td>
	<td class="border1px bordergroove borderblack radius10px" title="מתוך סכום">
	<span>מתוך:</span>
	<input oninput="perc1()" size="5" name="b" class="border1px bordergroove borderwhite radius10px"> 
	</td>
    <td class="border1px bordergroove borderblack radius10px baqua" title="תוצעה">
	<span>שווה:</span> 
	<input maxLength="40" size="5" name="total1" class="border1px bordergroove borderwhite radius10px">
	</td>
  </tr>
  <tr>
    <td class="border1px bordergroove borderblack radius10px" title="מספר סכום">
	<span>סכום:</span> 
	<input oninput="perc2()" size="5" name="c" class="border1px bordergroove borderwhite radius10px">
	</td>
	<td class="border1px bordergroove borderblack radius10px" title="מתוך סכום כללי">
	<span>מתוך:</span> 
	<input oninput="perc2()" size="5" name="d" class="border1px bordergroove borderwhite radius10px">
	</td>
    <td class="border1px bordergroove borderblack radius10px baqua" title="תוצעה באחוזים">
	<span>שווה:</span> 
	<input size="5" name="total2" class="border1px bordergroove borderwhite radius10px">
	<span>%</span> 
	</td>
	</tr>
 </tbody>
	
  <tfoot>
  <tr>
    <td align="middle" colSpan="3" class="bordernone">
    <input type="reset" value="&#xf021; איפוס" class="fa border1px bordergroove borderwhite radius10px" title="&#xf021; איפוס מלא">
    </td>
  </tr>
  </tfoot>

</table>
</form>
<br>

</div>

</body>
</html>