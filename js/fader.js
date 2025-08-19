var colors = new Array(steps);
getFadeColors(bgcolor,fcolor,colors);
var color = 0;
var text = 0;
var step = 1;

// fade: magic fader function
function fade()
{
// insert fader color into message
var text_out = texts[text].replace("{COLOR}", colors[color]); // texts should be defined in user script, e.g.: var texts = new Array("<font color='{COLOR}' sized='+3' face='Arial'>howdy</font>");

    // actually write message to document
htmlWrite(text_out, "fader");

// select next fader color
color += step; 

// completely faded in?
if (color >= colors.length-1) 
{ 
step = -1; // traverse colors array backward to fade out

// stop at last message if loop=false
if (!loop && text >= texts.length-1) return; // loop should be defined in user script, e.g.: var loop=true;
}

// completely faded out?
if (color == 0)
{
step = 1; // traverse colors array forward to fade in again

// select next message
text += 1;
if (text == texts.length) text = 0; // loop back to first message
}

// subtle timing logic...
setTimeout("fade()", (color == colors.length-2 && step == -1) ? show : ((color == 1 && step == 1) ? sleep : 50)); // sleep and show should be defined in user script, e.g.: var sleep=30; var show=500;
}

// helper function to make fader cross browser compatible
function htmlWrite(html,id)
{
var obj;
if (document.getElementById) // IE 5+ & Netscape 6+
{
obj = document.getElementById(id);
obj.innerHTML = html;
}
else if (document.all) // IE 4+
{
obj = document.all[id];
obj.innerHTML = html;
}
else if (document.layers) // Netscape 4+
{
obj = document.layers[id];
obj.document.open();
obj.document.write(html);
obj.document.close();
}
}

// getFadeColors: fills Colors (predefined Array)
// with color hex strings fading from ColorA to ColorB
// note: Colors.length equals the number of steps to fade
function getFadeColors(ColorA, ColorB, Colors)
{
len = Colors.length; 

// strip '#' signs if present 
if (ColorA.charAt(0)=='#') ColorA = ColorA.substring(1);
if (ColorB.charAt(0)=='#') ColorB = ColorB.substring(1);

// substract rgb compents from hex string 
var r = HexToInt(ColorA.substring(0,2));
var g = HexToInt(ColorA.substring(2,4));
var b = HexToInt(ColorA.substring(4,6));
var r2 = HexToInt(ColorB.substring(0,2));
var g2 = HexToInt(ColorB.substring(2,4));
var b2 = HexToInt(ColorB.substring(4,6));

// calculate size of step for each color component
var rStep = Math.round((r2 - r) / len);
var gStep = Math.round((g2 - g) / len);
var bStep = Math.round((b2 - b) / len);

// fill Colors array with fader colors
for (i = 0; i < len-1; i++)
{
Colors[i] = "#" + IntToHex(r) + IntToHex(g) + IntToHex(b);
r += rStep;
g += gStep;
b += bStep;
}
Colors[len-1] = "#" + ColorB; // make sure we finish exactly at ColorB
}

// IntToHex: converts integers between 0-255 into a two digit hex string.
function IntToHex(n) 
{
var result = n.toString(16);
if (result.length==1) result = "0"+result;
return result;
}

// HexToInt: converts two digit hex strings into integer.
function HexToInt(hex) 
{
return parseInt(hex, 16); 
} 

el = document.getElementById("fader"); 
el.onload = fade();