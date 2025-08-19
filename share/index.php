<!DOCTYPE html>
<html lang="cs" dir="auto">
    
  <head>
    
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><!DOCTYPE html>

    <title>
Sdílet | Sdílejte Telegram kanál, web nebo soubor nativně do aplikací přímo z vašeho zařízení
    </title>
    <meta name="viewport" content="width=device-width">
    
	<link href="../../css/main.css" rel="stylesheet" type="text/css"> 
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	
    <script src="../../js/sharefile.js"></script>	
    
    <style>
    .error {
      color: #d22;
    }
    input[type="button"] {
        height: 30px
    }
    .shareimg {
  background-image: url("../../img/share2.png");
  background-repeat: no-repeat;
  background-size: 30% 30%;
}
    </style>
    
  </head>
  
  <body class="blightblue center">
      
    <h1>
Sdílejte Telegram kanál, web nebo soubor nativně do aplikací přímo z vašeho zařízení
    </h1>

          <label for="title">Název kanálu/webu <input type="checkbox" id="title_checkbox" checked></label>
          <input id="title" value="📢 Češi a Slováci v Telegramu 📢" type="hidden"> | 
          <label for="text">Popis kanálu/webu <input type="checkbox" id="text_checkbox" checked></label>
<br> 
          <textarea id="text" name="text" rows="10" cols="45">
📢 Češi a Slováci v Telegramu 📢 &#10;&#10;Vše o telegramu - tipy, návody, novinky &#10;Informativní kanál o Telegramu v češtině. &#10;České a Slovenské kanály skupiny, diskuze
  </textarea>
<br>

          <label for="url">Odkaz na kanál/web <input type="checkbox" id="url_checkbox" checked></label>
<br>
          <input id="url" value="https://t.me/czsktg" type="url">
<br><br>
          <label for="url">Přidat soubor:</label>
<br> 
          <input id="files" type="file" multiple>
          
          <input id="share-no-gesture" value="Share without user gesture" type="hidden">
 <br> <br>              
                
<button id="share" class="fsize400 center bblack yellow">
Sdílet <i class="material-icons">share</i>
</button>

    <div id="output"></div>

  </body>
</html>