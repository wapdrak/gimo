<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
</head>
<body>


<h3>Právě posloucháte: <span id="nazevstanice" class="blue">Oldies radio</span></h3>
<audio id="audiofile" autoplay>
  <source src="//ice.abradio.cz/oldiesradio128.mp3">
</audio>

<button onclick="play();" id="poslech">Poslech</button>
<button onclick="pause();" id="pauza">Pauza</button>
<button onclick="change('//streamingp.shoutcast.com/hotmixradio-baby-128.mp3');" onmouseup="getElementById('nazevstanice').innerHTML=(this.innerText);">Play music 1</button>
<button onclick="change('//streamingp.shoutcast.com/hotmixradio-latino-128.mp3');" onmouseup="getElementById('nazevstanice').innerHTML=(this.innerText);">Play music 2</button>

 
<script type="text/javascript">
   
var x = document.getElementById("audiofile"); 

function play() { 
  x.play(); 
} 

function pause() { 
  x.pause(); 
} 

   function change(url)
   {
     x.setAttribute('src', url);
   }
   
</script>


</body>
</html>