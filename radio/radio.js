<!-- 
// stanic 96

var radiolink=new Array(
//001
'//mp3stream4.abradio.cz:8000/clubbeat128.mp3',
//002
'//icecast2.play.cz:8000/Clubradio.mp3',
//003
'//mp3stream4.abradio.cz:8000/dance128.mp3',
//004
'//ice.abradio.cz/fajnclub64.mp3',
//005
'//mp3stream4.abradio.cz:8000/domino128.mp3',
//006
'//19993.live.streamtheworld.com/RADIO_HELAX_128.mp3',
//007
'//mp3stream4.abradio.cz:8000/madonna128.mp3',
//008
'//icecast5.play.cz:8000/zlatapraha128.mp3',
//009
'//icecast6.play.cz:8000/seejay128.mp3',
//010
'//clubberry.fm:8000/dance',
//011
'//fgv.impek.tv:80/',
//012
'//mp3-6.hotmixradios.net:8080/;dance',
//013
'//stream1.accuradio.com:8022',
//014
'//stream1.accuradio.com:8008',
//015
'//stream1.accuradio.com:8064',
//016
'//mp3stream4.abradio.cz:8000/clickandcountry128.mp3',
//017
'//mp3stream4.abradio.cz:8000/country128.mp3',
//018
'//174.36.206.217:8747',
//019
'//205.164.62.22:7800',
//020
'//108.61.73.119:8018',
//021
'//stream1.accuradio.com:8038',
//022
'//222.122.131.60:1300',
//023
'//91.121.140.11:9000',
//024
'//210.172.101.218:8004',
//025
'//74.112.204.210:8133',
//026
'//173.192.225.172:12728',
//027
'//173.192.225.172:10608',
//028
'//173.192.225.172:8008',
//029
'//173.192.225.172:7328',
//030
'//209.236.126.122:8202',
//031
'//207.200.96.229:8016',
//032
'//199.27.180.184:443',
//033
'//38.100.128.106:8012',
//034
'//130.166.82.14:8002',
//035
'//87.98.151.43:9000',
//036
'//38.100.128.106:8014',
//037
'//66.225.205.8:8030',
//038
'//205.164.41.50:18830',
//039
'//174.120.222.233:9998',
//040
'//stream1.accuradio.com:8042',
//041
'//212.96.160.160:8088',
//042
'//37.157.195.23:8038',
//043
'//listen.clickfm.co.il:8016/click2dance',
//044
'//djbuzz.stream2net.eu:8010/',
//045
'//stream.intenseradio.net:8000/live',
//046
'//s6.viastreaming.net:7010/',
//047
'//212.96.160.160:7996',
//048
'//212.96.160.160:8066',
//049
'//37.157.195.23:8012',
//050
'//212.96.160.160:8012',
//051
'//www.sensimedia.net:9000',
//052
'//s4.relay-basslover.de:9000',
//053
'//nrgetik.streams.dnbradio.at.ilovedrumnbass.com:8000',
//054
'//stream.247drumandbass.com:2470/',
//055
'//radio.drums.ro:8000/',
//056
'//stream-06.shoutcast.com:8002/bassdrive_mp3_56kbps',
//057
'//plays.on.128.cause.too.poor.for.192.at.bassjunkees.com:8128/',
//058
'//clubberry.fm:8000/dnb_256',
//059
'//clubberry.fm:8000/dubstep_256',
//060
'//stream1.dnbheaven.com:8000/',
//061
'//nrgetik.streams.dnbradio.at.ilovedrumnbass.com:8000',
//062
'//radio.dnbtv.com:8002/',
//063
'//207.200.96.229:8030/',
//064
'//78.129.159.205:8094',
//065
'//173.192.176.180:8400',
//066
'//108.163.165.82:5000/DnB/192',
//067
'//94.23.197.13:9702',
//068
'//75.125.130.122:8062',
//069
'//91.121.134.105:8466/',
//070
'//www.hmsu.org:8000/',
//071
'//mobile.internet-radio.com/MobileInternetRadioPlayer.php?radio=dWsxLmludGVybmV0LXJhZGlvLmNvbToxNTYzNA==',
//072
'//stream4.jungletrain.net:8000/',
//073
'//live.krisisdnb.com:9268',
//074
'//80.94.69.106:6404/',
//075
'//173.236.56.82:8006',
//076
'//173.192.70.144:7938',
//077
'//stream1.radio23.cz/4ch128',
//078
'//ice.abradio.cz/shadowbox128.mp3',
//079
'//75.126.64.105:8077/',
//080
'//205.188.215.225:8002',
//081
'//streaming203.radionomy.com/FeeverMix?group=999',
//082
'//75.126.64.105:8077/',
//083
'//s1.radio.lclhst.net:1337/',
//084
'//88.191.73.231:5010',
//085
'//207.200.96.231:8012',
//086
'//stream1.accuradio.com:8076',
//087
'//87.98.129.133:1755',
//088
'//live.luxfunkradio.com:8200/',
//089
'//207.200.96.226:8018',
//090
'//46.21.169.72:8014',
//091
'//clubberry.fm:8000/hard',
//092
'//ice.abradio.cz:8000/fajnhardcore128.mp3',
//093
'//212.96.160.160:8030',
//094
'//188.142.75.128:443',
//095
'//ice.abradio.cz/alternative128.mp3',
//096
'//serv1.beatbasement.com:9622/'
);

var radioname=new Array(
//001
'Clubbeat Radio (128kbps mp3)',
//002
'ClubRadio.cz (160kbps mp3)',
//003
'Dance rádio (128kbps mp3)',
//004
'Fajn Rádio Club (64kbps mp3)',
//005
'Rádio Domino (128kbps mp3)',
//006
'Rádio Helax (128kbps mp3)',
//007
'Rádio Madonna (128kbps mp3)',
//008
'Rádio Zlatá Praha (128kbps mp3)',
//009
'SeeJay Rádio (128kbps mp3)',
//010
'Clubberry Dance (128kbps mp3)',
//011
'FG Remix (128kbps mp3)',
//012
'Hotmixradio Dance (128kbps mp3)',
//013
'Country Heritage (64kbps mp3)',
//014
'Hot Country (64kbps mp3)',
//015
'New Country Hits (64kbps mp3)',
//016
'Rádio Click and Country (128kbps mp3)',
//017
'Rádio Country (128kbps mp3)',
//018
'Absolute COUNTRY (128kbps mp3)',
//019
'ABSOLUTELY COUNTRY HITS RADIO - (1.FM TM) (128kbps mp3)',
//020
'181.FM - Highway 181 (Classic Country) (128kbps mp3)',
//021
'AccuClassical (64kbps mp3)',
//022
'Classical.24 (128kbps mp3)',
//023
'Adagio.FM - Timeless Classical Music from Medieval to Modern with Chat & Automated Requests (128kbps mp3)',
//024
'Allways Baroque (128kbps mp3)',
//025
'Audiophile Classical (320kbps mp3)',
//026
'CALMRADIO.COM - CHOPIN - Sampler (128kbps mp3)',
//027
'CALMRADIO.COM - HARP - Sampler (128kbps mp3)',
//028
'CALMRADIO.COM - MOVIEOLA - Sampler (128kbps mp3)',
//029
'CALMRADIO.COM - MOZART - Sampler (128kbps mp3)',
//030
'Chinese Classical Music (64kbps mp3)',
//031
'Classical & Flamenco Guitar - SKY.FM - a mix of classical, spanish, and flamenco guitar (96kbps mp3)',
//032
'Classical 96.3FM CFMZ (128kbps mp3)',
//033
'Classical WETA 90.9 FM  - Washington D.C. (128kbps mp3)',
//034
'KCSN Classical 88.5 HD2 - from Cal. State, Northridge (128kbps mp3)',
//035
'M2 CLASSIC : ONLY SOUNDTRACKS & CLASSICAL MUSIC - Live From Paris France - www.m2radio.fr (128kbps mp3)',
//036
'VivaLaVoce from Classical WETA (128kbps mp3)',
//037
'WKSU Classical Channel (128kbps mp3)',
//038
'WWNO 2 - NPR - Classical Music - New Orleans (128kbps mp3)',
//039
'BASSLINE.FM - DnB - DUBSTEP - JUNGLE - DUB (128kbps mp3)',
//040
'Folk (128kbps mp3)',
//041
'Rádio Oneiro - STEREO - ELL (64kbps mp3)',
//042
'Rádio ORFEUS (32kbps mp3)',
//043
'Click2Dance (128kbps mp3 il)',
//044
'DJ BUZZ RADIO (192kbps mp3)',
//045
'Intense Radio (128kbps mp3)',
//046
'Radio Flo - Dance (128kbps mp3)',
//047
'ClubRádio.cz (160kbps mp3)',
//048
'DanceRádio FreestyleFM (128kbps mp3)',
//049
'RádioTop20 107.4 FM (128kbps mp3)',
//050
'Tep Rádio Dance (192kbps mp3)',
//051
'Dancehall Radio (96kbps mp3)',
//052
'Basslover.de (128kbps mp3)',
//053
'DNBRADIO - Fresh Drum and Bass, Jungle (JDNB) 24/7 (128kbps mp3)',
//054
'247drumandbass.com Drum and Bass, Jungle & Old Skool Hardcore beats from around the world (128kbps mp3)',
//055
'24/7 Drums.ro - Drum&Bass Online Radio Station (128kbps mp3)',
//056
'Bassdrive - Worldwide Drum and Bass Radio (56kbps mp3)',
//057
'Bassjunkees.com - Drum & Bass, Oldskool, Jungle & Dubstep 24/7 - Once Locked Addicted for Life (128kbps mp3)',
//058
'Clubberry Drum n Bass (256kbps mp3)',
//059
'Clubberry Dubstep (256kbps mp3)',
//060
'DnBHeaven.com - Drum And Bass Radio (128kbps mp3)',
//061
'DNBRADIO - Fresh Drum and Bass, Jungle (JDNB) 24/7 (128kbps mp3)',
//062
'DNBTV (128kbps mp3)',
//063
'Drum and Bass - DIGITALLY IMPORTED - tasty assortment to satisfy your drum and bass fix (96kbps mp3)',
//064
'Drum and bass world (128kbps mp3) wide.co.uk..',
//065
'Dub Step Beyond: Dubstep, Dub and Deep Bass. May damage speakers at high volume. (SomaFM) (128kbps mp3)',
//066
'Dubplate.fm - Drum and Bass (192kbps mp3)',
//067
'Dubstep Radio Play (96kbps mp3)',
//068
'FILTH FM (128kbps mp3)',
//069
'FUTUREDRUMZ.COM JUNGLE DNB RADIO (128kbps mp3)',
//070
'HMSU online radio (128kbps mp3)',
//071
'Internet radio (192kbps mp3)',
//072
'jungletrain.net - 24/7 drum and bass (128kbps mp3)',
//073
'KRISISDnB - Drum and Bass, Dubstep 24/7 (128kbps mp3)',
//074
'Liquid DnB  - DIGITALLY IMPORTED - Flowing with the freshest Liquid DnB (96kbps mp3)',
//075
'LiveDNB Atmosphere (128kbps mp3)',
//076
'Massive Dubstep (128kbps mp3)',
//077
'Rádio23 - DnB (128kbps mp3)',
//078
'Rádio ShadowBox (128kbps mp3)',
//079
'Insomniafm.com - Electronic Music Radio (128kbps mp3)',
//080
'Breaks (96kbps mp3) - DIGITALLY IMPORTED - a fine assortment of trance and house breaks',
//081
'FeeverMix (128kbps mp3 fr)',
//082
'Insomniafm.com - Electronic Music Radio (128kbps mp3)',
//083
'Minimal, Techno, Electro Sets (128kbps mp3)',
//084
'Sense.FM Progressive -  The Finest Progressive Electronic Dance Music on the Web streaming 24/7/365 (192kbps mp3)',
//085
'Space Station Soma (128kbps mp3) : Tune in, turn on, space out. Ambient and mid-tempo electronica. (SomaFM)',
//086
'Funk (64kbps mp3)',
//087
'Hotmixradio Funky (128kbps mp3)',
//088
'LUXFUNK RADIO - All the black... (192kbps mp3)',
//089
'WEFUNK Radio (64 kbps mp3) . raw uncut funk . classic & underground hip-hop . playlist & archive on wefunkradio.com',
//090
'Boschiebosch Hardrave Radio (128kbps mp3)',
//091
'Clubberry Hard (128kbps mp3)',
//092
'Fajn Rádio Hardcore (128kbps mp3)',
//093
'Rave Sound - Sound of Free Party HardTek HardCore SpeedCore Tribe Drum n Bass (128kbps mp3 cz)',
//094
'RazorFM 24/7 Hardstyle Radio Station (112kbps mp3)',
//095
'Alternative Times Radio (128kbps mp3 cz)',
//096
'beatbasement.com Powered by Fast-Serv.com (32kbps mp3)'
); 


var x = document.getElementById("audio"); 

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
   

var tzavriseznam='<button class="button black" type="button" onclick="javascript:seznam();">Vyber hudbu</button><br/>'; 

var tbezhudby='<span class="span black">Rádio je vypnuto</span><br/>'; 
tbezhudby+='<button type="button" class="button" onclick="javascript:radio(1);">Zapni rádio</button>';
 

var thudba='<h1 class="h1 blinkradio">♬ Online rádio 📻</h1>'; 
thudba+='<div id="radio">'; 
thudba+='<h3 class="black span" id="nazevstanice">Rádio Oldies (128kbps mp3)</h3><br/>';
thudba+='<span class="black span">(Klikni na Poslech v přehrávači)</span></br>'; 
thudba+='<button type="button" class="black span" onclick="javascript:bezhudby();">Vypni rádio</button><br/>'; 
thudba+='<button onclick="play();" id="poslech">Poslech</button>'; 
thudba+='<button onclick="pause();" id="pauza">Pauza</button>'; 
thudba+='<audio id="audio" class="audio" controls autoplay>'; 
thudba+='<source src="//ice.abradio.cz/oldiesradio128.mp3">'; 
thudba+='</audio>'; 
thudba+='</div>'; 
thudba+='<div id="seznam">'; 
thudba+='<button type="button" class="black button" onclick="javascript:seznam();">Vyber hudbu</button>'; 
thudba+='</div><br/>'; 

var tseznam='<span class="span yellow">Vyber styl :</span></br>'; 
 
tseznam+='<button type="button" class="button black" onclick="javascript:rdance();">Dance rádio</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rcountry();">Country Folk</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rklasicka();">Klasická</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rdnb();">DnB Dubtep</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:relectro();">Electro</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rfunk();">Funk</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rhardcore();">Hardcore</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rhiphop();">Hip-Hop Rap RnB Urban</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rhouse();">House </button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rjazz();">Jazz</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rmetal();">Metal</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rpop();">Pop</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rpunk();">Punk</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rreggae();">Reggae</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rrelax();">Relax</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rrock();">Rock</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rmluvene();">Mluvené</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rtechno();">Techno</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rtrance();">Trance</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rceska();">Česká rádia</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rizraelska();">Izraelská rádia</button>'; 
tseznam+='<button type="button" class="button black" onclick="javascript:rruzna();">Různá</button>'; 
tseznam+='<br/><br/><button type="button" class="button black" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trdance='<form class="form">'; 
trdance+='<fieldset class="fieldset legend"><legend class="legend yellow" >Dance - vyber stanici :</legend>'; 
trdance+='<select class="select" onchange="javascript:radio(this.value);">'; 
trdance+='<optgroup class="black" label="Dance - stanice :">'; 
trdance+='<option class="option black">Vyber stanici :</option>'; 
trdance+='<option class="option black" value="1">Clubbeat Radio (128kbps mp3)</option>'; 
trdance+='<option class="option black" value="2">ClubRádio.cz (160kbps mp3)</option>'; 
trdance+='<option class="option black" value="3">Dance rádio (128kbps mp3)</option>'; 
trdance+='<option class="option black" value="4">Fajn Rádio Club (64kbps mp3)</option>';
trdance+='<option class="option black" value="5">Rádio Domino (128kbps mp3)</option>';
trdance+='<option class="option black" value="6">Rádio Helax (128kbps mp3)</option>';
trdance+='<option class="option black" value="7">Rádio Madonna (128kbps mp3)</option>';
trdance+='<option class="option black" value="8">Rádio Zlatá Praha (128kbps mp3)</option>';
trdance+='<option class="option black" value="9">SeeJay Rádio (128kbps mp3)</option>';
trdance+='<option class="option black" value="10">Clubberry Dance (128kbps mp3)</option>';
trdance+='<option class="option black" value="11">FG Remix (128kbps mp3)</option>';
trdance+='<option class="option black" value="12">Hotmixradio Dance (128kbps mp3)</option>'; 
trdance+='<option class="option black" value="43">Click2Dance (128kbps mp3 il)</option>'; 
trdance+='<option class="option black" value="44">DJ BUZZ RADIO (192kbps mp3)</option>'; 
trdance+='<option class="option black" value="45">Intense Radio (128kbps mp3)</option>'; 
trdance+='<option class="option black" value="46">Radio Flo - Dance (128kbps mp3)</option>'; 
trdance+='<option class="option black" value="47">ClubRádio.cz (160kbps mp3)</option>'; 
trdance+='<option class="option black" value="48">DanceRádio FreestyleFM (128kbps mp3)</option>'; 
trdance+='<option class="option black" value="49">RádioTop20 107.4 FM (128kbps mp3)</option>'; 
trdance+='<option class="option black" value="50">Tep Rádio Dance (192kbps mp3)</option>'; 
trdance+='<option class="option black" value="51">Dancehall Radio (96kbps mp3)</option>'; 
trdance+='<option class="option black" value="52">Basslover.de (128kbps mp3)</option>'; 
trdance+='</optgroup>'; 
trdance+='</select></fieldset></form>'; 
trdance+='<button type="button" class="button black" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trdance+='<button type="button" class="button black" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 


var trcountry='<form class="form">'; 
trcountry+='<fieldset class="fieldset"><legend class="legend yellow">Country Folk - vyber stanici :</legend>'; 
trcountry+='<select class="select" onchange="javascript:radio(this.value);">'; 
trcountry+='<optgroup class="black" label="Country Folk - stanice :">'; 
trcountry+='<option class="option black">Vyber stanici :</option>'; 
trcountry+='<option class="option black" value="13">Country Heritage (64kbps mp3)</option>'; 
trcountry+='<option class="option black" value="14">Hot Country (64kbps mp3)</option>'; 
trcountry+='<option class="option black" value="15">New Country Hits (64kbps mp3)</option>'; 
trcountry+='<option class="option black" value="16">Rádio Click and Country (128kbps mp3)</option>';
trcountry+='<option class="option black" value="17">Rádio Country (128kbps mp3)</option>';
trcountry+='<option class="option black" value="18">Absolute COUNTRY (128kbps mp3)</option>';
trcountry+='<option class="option black" value="19">ABSOLUTELY COUNTRY HITS RADIO - (1.FM TM) (128kbps mp3)</option>';
trcountry+='<option class="option black" value="20">181.FM - Highway 181 (Classic Country) (128kbps mp3)</option>'; 
trcountry+='<option class="option black" value="40">Folk (128kbps mp3)</option>'; 
trcountry+='<option class="option black" value="41">Rádio Oneiro - STEREO - ELL (64kbps mp3)</option>'; 
trcountry+='<option class="option black" value="42">Rádio ORFEUS (32kbps mp3)</option>'; 
trcountry+='</optgroup>'; 
trcountry+='</select></fieldset></form>'; 
trcountry+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trcountry+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trdnb='<form class="form">'; 
trdnb+='<fieldset class="fieldset"><legend class="legend yellow">DnB - vyber stanici :</legend>'; 
trdnb+='<select class="select" onchange="javascript:radio(this.value);">'; 
trdnb+='<optgroup class="black" label="DnB - stanice :">'; 
trdnb+='<option class="option black">Vyber stanici :</option>'; 
trdnb+='<option class="option black" value="53">DNBRADIO - Fresh Drum and Bass, Jungle (JDNB) 24/7 (128kbps mp3)</option>'; 
trdnb+='<option class="option black" value="54">247drumandbass.com Drum and Bass, Jungle & Old Skool Hardcore beats from around the world (128kbps mp3)</option>'; 
trdnb+='<option class="option black" value="55">24/7 Drums.ro - Drum&Bass Online Radio Station (128kbps mp3)</option>'; 
trdnb+='<option class="option black" value="56">Bassdrive - Worldwide Drum and Bass Radio (56kbps mp3)</option>';
trdnb+='<option class="option black" value="57">Bassjunkees.com - Drum & Bass, Oldskool, Jungle & Dubstep 24/7 - Once Locked Addicted for Life (128kbps mp3)</option>';
trdnb+='<option class="option black" value="39">BASSLINE.FM - DnB - DUBSTEP - JUNGLE - DUB (128kbps mp3)</option>';
trdnb+='<option class="option black" value="58">Clubberry Drum n Bass (256kbps mp3)</option>';
trdnb+='<option class="option black" value="59">Clubberry Dubstep (256kbps mp3)</option>';
trdnb+='<option class="option black" value="60">DnBHeaven.com - Drum And Bass Radio (128kbps mp3)</option>';
trdnb+='<option class="option black" value="61">DNBRADIO - Fresh Drum and Bass, Jungle (JDNB) 247 (128kbps mp3)</option>';
trdnb+='<option class="option black" value="62">DNBTV (128kbps mp3)</option>'; 
trdnb+='<option class="option black" value="63">Drum and Bass - DIGITALLY IMPORTED - tasty assortment to satisfy your drum and bass fix (96kbps mp3)</option>'; 
trdnb+='<option class="option black" value="64">Drum and bass world (128kbps mp3) wide.co.uk..</option>'; 
trdnb+='<option class="option black" value="65">Dub Step Beyond: Dubstep, Dub and Deep Bass. May damage speakers at high volume. (SomaFM) (128kbps mp3)</option>'; 
trdnb+='<option class="option black" value="66">Dubplate.fm - Drum and Bass (192kbps mp3)</option>'; 
trdnb+='<option class="option black" value="67">Dubstep Radio Play (96kbps mp3)</option>'; 
trdnb+='<option class="option black" value="68">FILTH FM (128kbps mp3)</option>'; 
trdnb+='<option class="option black" value="69">FUTUREDRUMZ.COM JUNGLE DNB RADIO (128kbps mp3)</option>'; 
trdnb+='<option class="option black" value="70">HMSU online radio (128kbps mp3)</option>'; 
trdnb+='<option value="71">Internet radio (192kbps mp3)</option>'; 
trdnb+='<option class="option black" value="72">jungletrain.net - 24/7 drum and bass (128kbps mp3)</option>'; 
trdnb+='<option class="option black" value="73">KRISISDnB - Drum and Bass, Dubstep 24/7 (128kbps mp3)</option>'; 
trdnb+='<option class="option black" value="74">Liquid DnB  - DIGITALLY IMPORTED - Flowing with the freshest Liquid DnB (96kbps mp3)</option>'; 
trdnb+='<option class="option black" value="75">LiveDNB Atmosphere (128kbps mp3)</option>'; 
trdnb+='<option class="option black" value="76">Massive Dubstep (128kbps mp3)</option>'; 
trdnb+='<option class="option black" value="77">Rádio23 - DnB (128kbps mp3)</option>'; 
trdnb+='<option class="option black" value="78">Rádio ShadowBox (128kbps mp3)</option>'; 
trdnb+='</optgroup>'; 
trdnb+='</select></fieldset></form>'; 
trdnb+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trdnb+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trklasicka='<form class="form">'; 
trklasicka+='<fieldset class="fieldset"><legend class="legend yellow">Klasická - vyber stanici :</legend>'; 
trklasicka+='<select class="select" onchange="javascript:radio(this.value);">'; 
trklasicka+='<optgroup class="black" label="Klasická - stanice :">'; 
trklasicka+='<option class="option black">Vyber stanici :</option>'; 
trklasicka+='<option class="option black" value="21">AccuClassical (64kbps mp3)</option>'; 
trklasicka+='<option class="option black" value="22">Classical.24 (128kbps mp3)</option>'; 
trklasicka+='<option class="option black" value="23">Adagio.FM - Timeless Classical Music from Medieval to Modern with Chat & Automated Requests (128kbps mp3)</option>'; 
trklasicka+='<option class="option black" value="24">Allways Baroque (128kbps mp3)</option>';
trklasicka+='<option class="option black" value="25">Audiophile Classical (320kbps mp3)</option>';
trklasicka+='<option class="option black" value="26">CALMRADIO.COM - CHOPIN - Sampler (128kbps mp3)</option>';
trklasicka+='<option class="option black" value="27">CALMRADIO.COM - HARP - Sampler (128kbps mp3)</option>';
trklasicka+='<option class="option black" value="28">CALMRADIO.COM - MOVIEOLA - Sampler (128kbps mp3)</option>';
trklasicka+='<option class="option black" value="29">CALMRADIO.COM - MOZART - Sampler (128kbps mp3)</option>';
trklasicka+='<option class="option black" value="30">Chinese Classical Music (64kbps mp3)</option>';
trklasicka+='<option class="option black" value="31">Classical & Flamenco Guitar - SKY.FM - a mix of classical, spanish, and flamenco guitar (96kbps mp3)</option>';
trklasicka+='<option class="option black" value="32">Classical 96.3FM CFMZ (128kbps mp3)</option>';
trklasicka+='<option class="option black" value="33">Classical WETA 90.9 FM  - Washington D.C. (128kbps mp3)</option>'; 
trklasicka+='<option class="option black" value="34">KCSN Classical 88.5 HD2 - from Cal. State, Northridge (128kbps mp3)</option>'; 
trklasicka+='<option class="option black" value="35">M2 CLASSIC : ONLY SOUNDTRACKS & CLASSICAL MUSIC - Live From Paris France - www.m2radio.fr (128kbps mp3)</option>'; 
trklasicka+='<option class="option black" value="36">VivaLaVoce from Classical WETA (128kbps mp3)</option>'; 
trklasicka+='<option class="option black" value="37">WKSU Classical Channel (128kbps mp3)</option>'; 
trklasicka+='<option class="option black" value="38">WWNO 2 - NPR - Classical Music - New Orleans (128kbps mp3)</option>'; 
trklasicka+='</optgroup>'; 
trklasicka+='</select></fieldset></form>'; 
trklasicka+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trklasicka+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trelectro='<form class="form">'; 
trelectro+='<fieldset class="fieldset"><legend class="legend yellow">Electro - vyber stanici :</legend>'; 
trelectro+='<select class="select" onchange="javascript:radio(this.value);">'; 
trelectro+='<optgroup class="black" label="Electro - stanice :">'; 
trelectro+='<option class="option black">Vyber stanici :</option>'; 
trelectro+='<option class="option black" value="79">Insomniafm.com - Electronic Music Radio (128kbps mp3)</option>'; 
trelectro+='<option class="option black" value="80">Breaks (96kbps mp3) - DIGITALLY IMPORTED - a fine assortment of trance and house breaks</option>'; 
trelectro+='<option class="option black" value="81">FeeverMix (128kbps mp3 fr)</option>'; 
trelectro+='<option class="option black" value="82">Insomniafm.com - Electronic Music Radio (128kbps mp3)</option>';
trelectro+='<option class="option black" value="83">Minimal, Techno, Electro Sets (128kbps mp3)</option>';
trelectro+='<option class="option black" value="84">Sense.FM Progressive -  The Finest Progressive Electronic Dance Music on the Web streaming 24/7/365 (192kbps mp3)</option>';
trelectro+='<option class="option black" value="85">Space Station Soma (128kbps mp3) : Tune in, turn on, space out. Ambient and mid-tempo electronica. (SomaFM)</option>';
trelectro+='</optgroup>'; 
trelectro+='</select></fieldset></form>'; 
trelectro+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trelectro+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trfunk='<form class="form">'; 
trfunk+='<fieldset class="fieldset"><legend class="legend yellow">Funk - vyber stanici :</legend>'; 
trfunk+='<select class="select" onchange="javascript:radio(this.value);">'; 
trfunk+='<optgroup class="black" label="Funk - stanice :">'; 
trfunk+='<option class="option black">Vyber stanici :</option>'; 
trfunk+='<option class="option black" value="86">Funk (64kbps mp3)</option>'; 
trfunk+='<option class="option black" value="87">Hotmixradio Funky (128kbps mp3)</option>'; 
trfunk+='<option class="option black" value="88">LUXFUNK RADIO - All the black... (192kbps mp3)</option>'; 
trfunk+='<option class="option black" value="89">WEFUNK Radio (64 kbps mp3) . raw uncut funk . classic & underground hip-hop . playlist & archive on wefunkradio.com</option>';
trfunk+='</optgroup>'; 
trfunk+='</select></fieldset></form>'; 
trfunk+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trfunk+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trhardcore='<form class="form">'; 
trhardcore+='<fieldset class="fieldset"><legend class="legend yellow">Hardcore - vyber stanici :</legend>'; 
trhardcore+='<select class="select" onchange="javascript:radio(this.value);">'; 
trhardcore+='<optgroup class="black" label="Hardcore - stanice :">'; 
trhardcore+='<option class="option black">Vyber stanici :</option>'; 
trhardcore+='<option class="option black" value="90">Boschiebosch Hardrave Radio (128kbps mp3)</option>'; 
trhardcore+='<option class="option black" value="91">Clubberry Hard (128kbps mp3)</option>'; 
trhardcore+='<option class="option black" value="92">Fajn Rádio Hardcore (128kbps mp3)</option>'; 
trhardcore+='<option class="option black" value="93">Rave Sound - Sound of Free Party HardTek HardCore SpeedCore Tribe Drum n Bass (128kbps mp3 cz)</option>';
trhardcore+='<option class="option black" value="94">RazorFM 24/7 Hardstyle Radio Station (112kbps mp3)</option>';
trhardcore+='</optgroup>'; 
trhardcore+='</select></fieldset></form>'; 
trhardcore+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trhardcore+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trhiphop='<form class="form">'; 
trhiphop+='<fieldset class="fieldset"><legend class="legend yellow">Hip-Hop Rap RnB Urban - vyber stanici :</legend>'; 
trhiphop+='<select class="select" onchange="javascript:radio(this.value);">'; 
trhiphop+='<optgroup class="black" label="Hip-Hop Rap RnB Urban - stanice :">'; 
trhiphop+='<option class="option black">Vyber stanici :</option>'; 
trhiphop+='<option class="option black" value="95">Alternative Times Radio (128kbps mp3 cz)</option>'; 
trhiphop+='<option class="option black" value="96">beatbasement.com Powered by Fast-Serv.com (32kbps mp3)</option>'; 
trhiphop+='<option class="option black" value=""></option>'; 
trhiphop+='<option class="option black" value=""></option>';
trhiphop+='<option class="option black" value=""></option>';
trhiphop+='<option class="option black" value=""></option>';
trhiphop+='<option class="option black" value=""></option>';
trhiphop+='<option class="option black" value=""></option>';
trhiphop+='<option class="option black" value=""></option>';
trhiphop+='<option class="option black" value=""></option>';
trhiphop+='<option class="option black" value=""></option>';
trhiphop+='<option class="option black" value=""></option>';
trhiphop+='</optgroup>'; 
trhiphop+='</select></fieldset></form>'; 
trhiphop+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trhiphop+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trhouse='<form class="form">'; 
trhouse+='<fieldset class="fieldset"><legend class="legend yellow">House - vyber stanici :</legend>'; 
trhouse+='<select class="select" onchange="javascript:radio(this.value);">'; 
trhouse+='<optgroup class="black" label="House - stanice :">'; 
trhouse+='<option class="option black">Vyber stanici :</option>'; 
trhouse+='<option class="option black" value=""></option>'; 
trhouse+='<option class="option black" value=""></option>'; 
trhouse+='<option class="option black" value=""></option>'; 
trhouse+='<option class="option black" value=""></option>';
trhouse+='<option class="option black" value=""></option>';
trhouse+='<option class="option black" value=""></option>';
trhouse+='<option class="option black" value=""></option>';
trhouse+='<option class="option black" value=""></option>';
trhouse+='<option class="option black" value=""></option>';
trhouse+='<option class="option black" value=""></option>';
trhouse+='<option class="option black" value=""></option>';
trhouse+='<option class="option black" value=""></option>';
trhouse+='</optgroup>'; 
trhouse+='</select></fieldset></form>'; 
trhouse+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trhouse+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trjazz='<form class="form">'; 
trjazz+='<fieldset class="fieldset"><legend class="legend yellow">Jazz - vyber stanici :</legend>'; 
trjazz+='<select class="select" onchange="javascript:radio(this.value);">'; 
trjazz+='<optgroup class="black" label="Jazz - stanice :">'; 
trjazz+='<option class="option black">Vyber stanici :</option>'; 
trjazz+='<option class="option black" value=""></option>'; 
trjazz+='<option class="option black" value=""></option>'; 
trjazz+='<option class="option black" value=""></option>'; 
trjazz+='<option class="option black" value=""></option>';
trjazz+='<option class="option black" value=""></option>';
trjazz+='<option class="option black" value=""></option>';
trjazz+='<option class="option black" value=""></option>';
trjazz+='<option class="option black" value=""></option>';
trjazz+='<option class="option black" value=""></option>';
trjazz+='<option class="option black" value=""></option>';
trjazz+='<option class="option black" value=""></option>';
trjazz+='<option class="option black" value=""></option>';
trjazz+='</optgroup>'; 
trjazz+='</select></fieldset></form>'; 
trjazz+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trjazz+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trmetal='<form class="form">'; 
trmetal+='<fieldset class="fieldset"><legend class="legend yellow">Dance - vyber stanici :</legend>'; 
trmetal+='<select class="select" onchange="javascript:radio(this.value);">'; 
trmetal+='<optgroup class="black" label="Metal - stanice :">'; 
trmetal+='<option class="option black">Vyber stanici :</option>'; 
trmetal+='<option class="option black" value=""></option>'; 
trmetal+='<option class="option black" value=""></option>'; 
trmetal+='<option class="option black" value=""></option>'; 
trmetal+='<option class="option black" value=""></option>';
trmetal+='<option class="option black" value=""></option>';
trmetal+='<option class="option black" value=""></option>';
trmetal+='<option class="option black" value=""></option>';
trmetal+='<option class="option black" value=""></option>';
trmetal+='<option class="option black" value=""></option>';
trmetal+='<option class="option black" value=""></option>';
trmetal+='<option class="option black" value=""></option>';
trmetal+='<option class="option black" value=""></option>';
trmetal+='</optgroup>'; 
trmetal+='</select></fieldset></form>'; 
trmetal+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trmetal+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trpop='<form class="form">'; 
trpop+='<fieldset class="fieldset"><legend class="legend yellow">Pop - vyber stanici :</legend>'; 
trpop+='<select class="select" onchange="javascript:radio(this.value);">'; 
trpop+='<optgroup class="black" label="Pop - stanice :">'; 
trpop+='<option class="option black">Vyber stanici :</option>'; 
trpop+='<option class="option black" value=""></option>'; 
trpop+='<option class="option black" value=""></option>'; 
trpop+='<option class="option black" value=""></option>'; 
trpop+='<option class="option black" value=""></option>';
trpop+='<option class="option black" value=""></option>';
trpop+='<option class="option black" value=""></option>';
trpop+='<option class="option black" value=""></option>';
trpop+='<option class="option black" value=""></option>';
trpop+='<option class="option black" value=""></option>';
trpop+='<option class="option black" value=""></option>';
trpop+='<option class="option black" value=""></option>';
trpop+='<option class="option black" value=""></option>';
trpop+='</optgroup>'; 
trpop+='</select></fieldset></form>'; 
trpop+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trpop+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trpunk='<form class="form">'; 
trpunk+='<fieldset class="fieldset"><legend class="legend yellow">Punk - vyber stanici :</legend>'; 
trpunk+='<select class="select" onchange="javascript:radio(this.value);">'; 
trpunk+='<optgroup class="black" label="Punk - stanice :">'; 
trpunk+='<option class="option black">Vyber stanici :</option>'; 
trpunk+='<option class="option black" value=""></option>'; 
trpunk+='<option class="option black" value=""></option>'; 
trpunk+='<option class="option black" value=""></option>'; 
trpunk+='<option class="option black" value=""></option>';
trpunk+='<option class="option black" value=""></option>';
trpunk+='<option class="option black" value=""></option>';
trpunk+='<option class="option black" value=""></option>';
trpunk+='<option class="option black" value=""></option>';
trpunk+='<option class="option black" value=""></option>';
trpunk+='<option class="option black" class="option black" value=""></option>';
trpunk+='<option class="option black" value=""></option>';
trpunk+='<option class="option black" value=""></option>';
trpunk+='</optgroup>'; 
trpunk+='</select></fieldset></form>'; 
trpunk+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trpunk+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trreggae='<form class="fofm">'; 
trreggae+='<fieldset class="fieldset"><legend class="legend yellow">Reggae - vyber stanici :</legend>'; 
trreggae+='<select class="select" onchange="javascript:radio(this.value);">'; 
trreggae+='<optgroup class=" black" label="Reggae - stanice :">'; 
trreggae+='<option class="option black">Vyber stanici :</option>'; 
trreggae+='<option class="option black" value=""></option>'; 
trreggae+='<option class="option black" value=""></option>'; 
trreggae+='<option class="option black" value=""></option>'; 
trreggae+='<option class="option black" value=""></option>';
trreggae+='<option class="option black" value=""></option>';
trreggae+='<option class="option black" value=""></option>';
trreggae+='<option class="option black" value=""></option>';
trreggae+='<option class="option black" value=""></option>';
trreggae+='<option class="option black" value=""></option>';
trreggae+='<option class="option black" value=""></option>';
trreggae+='<option class="option black" value=""></option>';
trreggae+='<option class="option black" value=""></option>';
trreggae+='</optgroup>'; 
trreggae+='</select></fieldset></form>'; 
trreggae+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trreggae+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trrelax='<form class="form">'; 
trrelax+='<fieldset class="fieldset"><legend class="legend yelow">Relax - vyber stanici :</legend>'; 
trrelax+='<select class="oselect" onchange="javascript:radio(this.value);">'; 
trrelax+='<optgroup class="black" label="Relax - stanice :">'; 
trrelax+='<option class="option black">Vyber stanici :</option>'; 
trrelax+='<option class="option black" value=""></option>'; 
trrelax+='<option class="option black" value=""></option>'; 
trrelax+='<option class="option black" value=""></option>'; 
trrelax+='<option class="option black" value=""></option>';
trrelax+='<option class="option black" value=""></option>';
trrelax+='<option class="option black" value=""></option>';
trrelax+='<option class="option black" value=""></option>';
trrelax+='<option class="option black" value=""></option>';
trrelax+='<option class="option black" value=""></option>';
trrelax+='<option class="option black" value=""></option>';
trrelax+='<option class="option black" value=""></option>';
trrelax+='<option class="option black" value=""></option>';
trrelax+='</optgroup>'; 
trrelax+='</select></fieldset></form>'; 
trrelax+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trrelax+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trrock='<form class="form">'; 
trrock+='<fieldset class="fieldset"><legend class="legend yellow">Rock - vyber stanici :</legend>'; 
trrock+='<select class="select" onchange="javascript:radio(this.value);">'; 
trrock+='<optgroup class="black" class="black" label="Rock - stanice :">'; 
trrock+='<option class="option black">Vyber stanici :</option>'; 
trrock+='<option class="option black" value=""></option>'; 
trrock+='<option class="option black" value=""></option>'; 
trrock+='<option class="option black" value=""></option>'; 
trrock+='<option class="option black" value=""></option>';
trrock+='<option class="option black" value=""></option>';
trrock+='<option class="option black" value=""></option>';
trrock+='<option class="option black" value=""></option>';
trrock+='<option class="option black" value=""></option>';
trrock+='<option class="option black" value=""></option>';
trrock+='<option class="option black" value=""></option>';
trrock+='<option class="option black" value=""></option>';
trrock+='<option class="option black" value=""></option>';
trrock+='</optgroup>'; 
trrock+='</select></fieldset></form>'; 
trrock+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trrock+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trmluvene='<form class="form">'; 
trmluvene+='<fieldset class="fieldset"><legend class="legend yellow">Mluvené - vyber stanici :</legend>'; 
trmluvene+='<select class="select" onchange="javascript:radio(this.value);">'; 
trmluvene+='<optgroup class="black" label="Mluvené - stanice :">'; 
trmluvene+='<option class="option black">Vyber stanici :</option>'; 
trmluvene+='<option class="option black" value=""></option>'; 
trmluvene+='<option class="option black" value=""></option>'; 
trmluvene+='<option class="option black" value=""></option>'; 
trmluvene+='<option class="option black" value=""></option>';
trmluvene+='<option class="option black" value=""></option>';
trmluvene+='<option class="option black" value=""></option>';
trmluvene+='<option class="option black" value=""></option>';
trmluvene+='<option class="option black" value=""></option>';
trmluvene+='<option class="option black" value=""></option>';
trmluvene+='<option class="option black" value=""></option>';
trmluvene+='<option class="option black" value=""></option>';
trmluvene+='<option class="option black" value=""></option>';
trmluvene+='</optgroup>'; 
trmluvene+='</select></fieldset></form>'; 
trmluvene+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trmluvene+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trtechno='<form class="fofm">'; 
trtechno+='<fieldset class="fieldset"><legend class="legend yellow">Techno - vyber stanici :</legend>'; 
trtechno+='<select class="select" onchange="javascript:radio(this.value);">'; 
trtechno+='<optgroup class="black" label="Techno - stanice :">'; 
trtechno+='<option class="option black">Vyber stanici :</option>'; 
trtechno+='<option class="option black" value=""></option>'; 
trtechno+='<option class="option black" value=""></option>'; 
trtechno+='<option class="option black" value=""></option>'; 
trtechno+='<option class="option black" value=""></option>';
trtechno+='<option class="option black" value=""></option>';
trtechno+='<option class="option black" value=""></option>';
trtechno+='<option class="option black" value=""></option>';
trtechno+='<option class="option black" value=""></option>';
trtechno+='<option class="option black" value=""></option>';
trtechno+='<option class="option black" value=""></option>';
trtechno+='<option class="option black" value=""></option>';
trtechno+='<option class="option black" value=""></option>';
trtechno+='</optgroup>'; 
trtechno+='</select></fieldset></form>'; 
trtechno+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trtechno+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trtrance='<form class="form">'; 
trtrance+='<fieldset class="fieldset"><legend class="legend yellow">Trance - vyber stanici :</legend>'; 
trtrance+='<select class="select" onchange="javascript:radio(this.value);">'; 
trtrance+='<optgroup class="black" label="Trance - stanice :">'; 
trtrance+='<option class="option black">Vyber stanici :</option>'; 
trtrance+='<option class="option black" value=""></option>'; 
trtrance+='<option class="option black" value=""></option>'; 
trtrance+='<option class="option black" value=""></option>'; 
trtrance+='<option class="option black" value=""></option>';
trtrance+='<option class="option black" value=""></option>';
trtrance+='<option class="option black" value=""></option>';
trtrance+='<option class="option black" value=""></option>';
trtrance+='<option class="option black" value=""></option>';
trtrance+='<option class="option black" value=""></option>';
trtrance+='<option class="option black" value=""></option>';
trtrance+='<option class="option black" value=""></option>';
trtrance+='<option class="option black" value=""></option>';
trtrance+='</optgroup>'; 
trtrance+='</select"></fieldset></form>'; 
trtrance+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trtrance+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trceska='<form class="form">'; 
trceska+='<fieldset class="fieldset"><legend class="legend yellow">Česká - vyber stanici :</legend>'; 
trceska+='<select class="select" onchange="javascript:radio(this.value);">'; 
trceska+='<optgroup class="black" label="České  - stanice :">'; 
trceska+='<option class="option black">Vyber stanici :</option>'; 
trceska+='<option class="option black" value=""></option>'; 
trceska+='<option class="option black" value=""></option>'; 
trceska+='<option class="option black" value=""></option>'; 
trceska+='<option class="option black" value=""></option>';
trceska+='<option class="option black" value=""></option>';
trceska+='<option class="option black" value=""></option>';
trceska+='<option class="option black" value=""></option>';
trceska+='<option class="option black" value=""></option>';
trceska+='<option class="option black" value=""></option>';
trceska+='<option class="option black" value=""></option>';
trceska+='<option class="option black" value=""></option>';
trceska+='<option class="option black" value=""></option>';
trceska+='</optgroup>'; 
trceska+='</select></fieldset></form>'; 
trceska+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trceska+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trizraelska='<form class="form">'; 
trizraelska+='<fieldset class="fieldset"><legend class="legend yellow">Izraelská - vyber stanici :</legend>'; 
trizraelska+='<select class="select" onchange="javascript:radio(this.value);">'; 
trizraelska+='<optgroup class="black" label="Izraelské - stanice :">'; 
trizraelska+='<option class="option black">Vyber stanici :</option>'; 
trizraelska+='<option class="option black" value=""></option>'; 
trizraelska+='<option class="option black" value=""></option>'; 
trizraelska+='<option class="option black" value=""></option>'; 
trizraelska+='<option class="option black" value=""></option>';
trizraelska+='<option class="option black" value=""></option>';
trizraelska+='<option class="option black" value=""></option>';
trizraelska+='<option class="option black" value=""></option>';
trizraelska+='<option class="option black" value=""></option>';
trizraelska+='<option class="option black" value=""></option>';
trizraelska+='<option class="option black" value=""></option>';
trizraelska+='<option class="option black" value=""></option>';
trizraelska+='<option class="option black" value=""></option>';
trizraelska+='</optgroup>'; 
trizraelska+='</select></fieldset></form>'; 
trizraelska+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trizraelska+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br/>'; 

var trruzna='<form class="form">'; 
trruzna+='<fieldset class="fieldset"><legend class="legend yellow">Různé - vyber stanici :</legend>'; 
trruzna+='<select class="select" onchange="javascript:radio(this.value);">'; 
trruzna+='<optgroup class="black" label="Různé - stanice :">'; 
trruzna+='<option class="option black">Vyber stanici :</option>'; 
trruzna+='<option class="option black" value=""></option>'; 
trruzna+='<option class="option black" value=""></option>'; 
trruzna+='<option class="option black" value=""></option>'; 
trruzna+='<option class="option black" value=""></option>';
trruzna+='<option class="option black" value=""></option>';
trruzna+='<option class="option black" value=""></option>';
trruzna+='<option class="option black" value=""></option>';
trruzna+='<option class="option black" value=""></option>';
trruzna+='<option class="option black" value=""></option>';
trruzna+='<option class="option black" value=""></option>';
trruzna+='<option class="option black" value=""></option>';
trruzna+='<option class="option black" value=""></option>';
trruzna+='</optgroup>'; 
trruzna+='</select></fieldset></form>'; 
trruzna+='<button class="button black" type="button" onclick="javascript:seznam();">Jiná hudba</button><br/><br/>'; 
trruzna+='<button class="button black" type="button" onclick="javascript:zavriseznam();">Zavři seznam</button><br>'; 


function hudba() 
{
var fhudba = document.getElementById('zobrazradio'); 
fhudba.innerHTML = thudba; 
} 

function seznam() 
{
var fseznam = document.getElementById('seznam'); 
fseznam.innerHTML = tseznam; 
} 

function zavriseznam() 
{
var fzavriseznam = document.getElementById('seznam'); 
fzavriseznam.innerHTML = tzavriseznam; 
} 

function bezhudby() 
{ 
var fbezhudby = document.getElementById('radio'); 
fbezhudby.innerHTML = tbezhudby; 
} 

function rdance() 
{
var frdance = document.getElementById('seznam'); 
frdance.innerHTML = trdance; 
} 

function rcountry() 
{
var frcountry = document.getElementById('seznam'); 
frcountry.innerHTML = trcountry; 
} 

function rdnb() 
{
var frdnb = document.getElementById('seznam'); 
frdnb.innerHTML = trdnb; 
} 

function rklasicka() 
{
var frklasicka = document.getElementById('seznam'); 
frklasicka.innerHTML = trklasicka; 

} 

function relectro() 
{
var frelectro = document.getElementById('seznam'); 
frelectro.innerHTML = trelectro; 

} 

function rfunk() 
{
var frfunk = document.getElementById('seznam'); 
frfunk.innerHTML = trfunk; 

} 

function rhardcore() 
{
var frhardcore = document.getElementById('seznam'); 
frhardcore.innerHTML = trhardcore; 

} 

function rhiphop() 
{
var frhiphop = document.getElementById('seznam'); 
frhiphop.innerHTML = trhiphop; 

} 

function rhouse() 
{
var frhouse = document.getElementById('seznam'); 
frhouse.innerHTML = trhouse; 

} 

function rjazz() 
{
var frjazz = document.getElementById('seznam'); 
frjazz.innerHTML = trjazz;

} 

function rmetal() 
{
var frmetal = document.getElementById('seznam'); 
frmetal.innerHTML = trmetal; 
} 

function rpop() 
{
var frpop = document.getElementById('seznam'); 
frpop.innerHTML = trpop; 
} 

function rpunk() 
{
var frpunk = document.getElementById('seznam'); 
frpunk.innerHTML = trpunk; 
} 

function rreggae() 
{
var frreggae = document.getElementById('seznam'); 
frreggae.innerHTML = trreggae; 
} 

function rrelax() 
{
var frrelax = document.getElementById('seznam'); 
frrelax.innerHTML = trrelax; 
} 

function rrock() 
{
var frrock = document.getElementById('seznam'); 
frrock.innerHTML = trrock; 
} 

function rmluvene() 
{
var frmluvene = document.getElementById('seznam'); 
frmluvene.innerHTML = trmluvene; 
} 

function rtechno() 
{
var frtechno = document.getElementById('seznam'); 
frtechno.innerHTML = trtechno; 
} 

function rtrance() 
{
var frtrance = document.getElementById('seznam'); 
frtrance.innerHTML = trtrance; 
} 

function rceska() 
{
var frceska = document.getElementById('seznam'); 
frceska.innerHTML = trceska; 
} 

function rizraelska() 
{
var frizraelska = document.getElementById('seznam'); 
frizraelska.innerHTML = trizraelska; 
} 

function rruzna() 
{
var frruzna = document.getElementById('seznam'); 
frruzna.innerHTML = trruzna; 
} 

function radio(vyber) 
{
var tradio='<span class="span black" id="nazevstanice">' + radioname[vyber-1] + '</span><br/>'; 
tradio+='<button class="button black" type="button" onclick="javascript:bezhudby();">Vypni rádio</button><br/>'; 
tradio+='<button onclick="pause();" id="pauza">Pauza</button>'; 
tradio+='<audio id="audio" class="audio" controls autoplay>'; 
tradio+='<audio class="audio" id="audio" autoplay>'; 
tradio+='<source src="' + radiolink[vyber-1] + '">'; 
tradio+='</audio>'; 


var fradio = document.getElementById('radio'); 
fradio.innerHTML = tradio; 
} 

hudba(); 

//-->