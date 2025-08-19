<!DOCTYPE html>
<html lang="he" dir="auto">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>מחשבון פשוט</title>
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

<h1 class="">מחשבון פשוט</h1>
    <div class="flex" dir="ltr" >
    <div class="calculator">
      <div class="calculator__count-wrap">
        <div class="calculator__screen-holder">
          <div class="calculator__subscreen"></div>
          <div class="calculator__screen"></div>
        </div>
        <div class="calculator__buttons">
          <div class="calc-btn-wrap">
            <button class="calc-btn calc-btn_c_pink calc-btn_s_wide" value="C">C
            </button>
          </div>
          <div class="calc-btn-wrap calc-btn-wrap_disabled">
            <button class="calc-btn" disabled="disabled">∞
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn" value="00">00
            </button>
          </div>
          <div class="calc-btn-wrap">
           <button class="calc-btn calc-btn_c_yellow" data-oper="+">+
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn" value="7">7
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn" value="8">8
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn" value="9">9
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn calc-btn_c_yellow" data-oper="-">-
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn" value="4">4
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn" value="5">5
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn" value="6">6
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn calc-btn_c_yellow" data-oper="*">*
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn" value="1">1
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn" value="2">2
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn" value="3">3
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn calc-btn_c_yellow" data-oper="/">/
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn" value="0">0
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn" value="." data-oper=".">.
            </button>
          </div>
          <div class="calc-btn-wrap">
            <button class="calc-btn calc-btn_c_pink calc-btn_s_wide" data-oper="=">=
            </button>
          </div>
        </div>
      </div>
      <div class="calculator__history">
      </div>
    </div>
    </div>
	

<button type="button" class="add material-icons bblack white center marginlauto marginpauto marginn2px paddingd2px border4px" title="הוספה לשולחן עבודה" style="font-size:300%;">&#xe148; הוספה לשולחן עבודה</button>
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

</body>
</html>