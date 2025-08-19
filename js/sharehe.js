$('.sharebutton').on('click', function () {
$.confirm({
    title: 'שיתוף דף/מוצר',
    boxWidth: '100%',
    useBootstrap: false,
    theme: 'supervan',
	rtl: true,
    content: 'url://gimo.co.il/url/share/sharehe.html',
    buttons: {
        cancel: {
            text: 'יציאה',
			btnClass: 'btn-blue',
            keys: ['enter','esc'],
        }
    }
});
});

   function maphaifa(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.0674794458255!2d35.002373684817044!3d32.81697698095989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba35fc8b315f%3A0xa9c65c8e7b28f80e!2z15LXmdee15Ug15HXoiLXniAtINem15nXldeTINee16nXqNeT15kgLSDXodeg15nXoyDXl9eZ16TXlA!5e0!3m2!1siw!2sil!4v1568906776306!5m2!1siw!2sil";

window.open(uri,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function mapbesser(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.0333995525966!2d34.826753684835175!3d32.09538298118324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a299b1828f9%3A0xf7d19971cdff5cd5!2z15LXmdee15Ug15HXoiLXnSDXodeg15nXoyDXkdeh16g!5e0!3m2!1siw!2sil!4v1568908549544!5m2!1siw!2sil";

window.open(uri,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function wahaifa(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "//wa.me/97248650507";

window.open(uri,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function wabesser(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "//wa.me/972722151290";

window.open(uri,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}


   function smsshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "sms:?";

var href1 = "body=";
var desc1 = "ממליץ על ";
var desc2 = "%0A%0A";
var title =  document.title;
var title1 = "%0A%0A";	   
var href = location.href;

var url = uri + href1 + encodeURIComponent(desc1) + desc2 + encodeURIComponent(title) + title1 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function emailshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "mailto:?";

var href1 = "subject=";
var desc = "ממליצ על ";
var title =  document.title;
var href4 = "&body=";
var title2 = "--%0A%0A";	   
var href = location.href;

var url = uri + href1 + encodeURIComponent(desc) + encodeURIComponent(title) + href4 + title2 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function whatsappshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://api.whatsapp.com/send?";

var href1 = "text=";
var desc = "ממליץ על אתר";
var href2 = "%0A%0A";
var title = document.title;
var href3 = "%0A%0A";   
var href = location.href;

var url = uri + href1 + encodeURIComponent(desc) + href2 + encodeURIComponent(title) + href3 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function whatsappmobileshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "whatsapp://send?";

var href1 = "text=";
var desc = "ממליץ על אתר";
var href2 = "%0A%0A";
var title = document.title;
var href3 = "%0A%0A";   
var href = location.href;

var url = uri + href1 + encodeURIComponent(desc) + href2 + encodeURIComponent(title) + href3 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function facebookshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://www.facebook.com/sharer/sharer.php?";

var href1 = "t=";
var title = "ממליץ על אתר";
var href2 = "&u=";  
var href = location.href;

var url = uri + href1 + encodeURIComponent(title) + href2 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function googleplusshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://plus.google.com/share?";

var href1 = "url="; 
var href = location.href;

var url = uri + href1 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function linkedinshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://www.linkedin.com/shareArticle?";

var href1 = "mini=true";
var title1 = "&title=";
var title = document.title;
var href2 = "&url=";   
var href = location.href;

var url = uri + href1 + title1 + encodeURIComponent(title) + href2 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left)+"&summary=&source=https://www.prekladac.co";

return false
}

   function telegramshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://t.me/share/url?";

var href1 = "url=";
var href = location.href;
var title1 = "&text=";
var title = document.title;  

var url = uri + href1 + encodeURIComponent(href) + title1 + encodeURIComponent(title);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function odnoklasnikishare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://connect.ok.ru/offer?";

var href1 = "url=";
var href = location.href;

var url = uri + href1 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function pinterestshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://pinterest.com/pin/create/button/?";

var href1 = "url=";
var href = location.href;
var title1 = "&description=";
var title = document.title;

var url = uri + href1 + encodeURIComponent(href) + title1 +  encodeURIComponent(title);
	   
var url = "https://pinterest.com/pin/create/button/?url="+encodeURIComponent(location.href)+"&amp;description="+encodeURIComponent(document.title);
window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}	   

   function redditshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://reddit.com/submit?";

var href1 = "title=";
var title = document.title;
var href2 = "&url=";
var href = location.href;

var url = uri + href1 + encodeURIComponent(title) + href2 +  encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function twittershare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://twitter.com/intent/tweet?";

var href1 = "url=";
var href = location.href;
var title1 = "&text=";
var title = document.title;
var hashtag1 = "&hashtags=";
var hashtag = "תרגומ מקוון";

var url = uri + href1 + encodeURIComponent(href) + title1 + encodeURIComponent(title) + hashtag1 + encodeURIComponent(hashtag);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function vkontakteshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://vk.com/share.php?";

var href1 = "url=";
var href = location.href;

var url = uri + href1 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function tumblrshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://www.tumblr.com/widgets/share/tool?";

var href1 = "shareSource=legacy&canonicalUrl=https://www.prekladac.co&url=";
var href = location.href;
var title1 = "&title=";
var title = document.title;
var href2 = "&_format=html";

var url = uri + href1 + encodeURIComponent(href) + title1 + encodeURIComponent(title) + href2;

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function diggshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://digg.com/submit?";

var href1 = "url=";
var href = location.href;

var url = uri + href1 + encodeURIComponent(href);

var url = "url="+encodeURIComponent(location.href);
window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function stumbleuponshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "http://www.stumbleupon.com/submit?";

var href1 = "url=";
var href = location.href;
var title1 = "&title=";
var title = document.title;

var url = uri + href1 + encodeURIComponent(href) + title1 + encodeURIComponent(title);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function xingshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://www.xing.com/spi/shares/new?";

var href1 = "url=";
var href = location.href;

var url = uri + href1 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function mailrushare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://connect.mail.ru/share?";

var href1 = "share_url=";
var href = location.href;

var url = uri + href1 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function mailyahooshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "http://compose.mail.yahoo.com/?";

var href1 = "subject=";
var desc = "ממליץ על אתר";
var href2 = "&bcc=";
var href3 = "peter@smartlation.com";
var href4 = "&body=";
var title =  document.title;
var title2 = "%0A%0A";	   
var href = location.href;

var url = uri + href1 + encodeURIComponent(desc) + href2 + encodeURIComponent(href3) + href4 + encodeURIComponent(title) + title2 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function skypeshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://web.skype.com/share?";

var href1 = "url=";
var href = location.href;

var url = uri + href1 + encodeURIComponent(href);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function renrenshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "http://widget.renren.com/dialog/share?";

var href1 = "resourceUrl=https://www.prekladac.co&srcUrl=";
var href = location.href;
var title1 = "&title=";
var title = window.title;

var url = uri + href1 + encodeURIComponent(href) + title1 + encodeURIComponent(title);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function weiboshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "http://service.weibo.com/share/share.php?";

var href1 = "url=";
var href = location.href;
var title1 = "&appkey=&title=";
var title = window.title;
var href2 = "&pic=&ralateUid=";

var url = uri + href1 + encodeURIComponent(href) + title1 + encodeURIComponent(title) + href2;

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function surfingbirdshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
var url = "http://surfingbird.ru/share?url="+encodeURIComponent(location.href)+"&description=&screenshot=&title="+encodeURIComponent(document.title);
window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function wordpressshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "http://wordpress.com/press-this.php?";

var href1 = "t=";
var title1 = "ממליץ על אתר";
var href2 = "&u=";
var href = location.href;
var desc1 = "&s=";
var title = document.title;
var href3 = "&i=";

var url = uri + href1 + encodeURIComponent(title1) + href2 + encodeURIComponent(href) + desc1 + encodeURIComponent(title) + href3;
https://wapdrak.wordpress.com/wp-admin/press-this.php?t=test&u=https%3A%2F%2Fwww.prekladac.co%2Fcs%2F&s=desc
window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function bloggershare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "https://www.blogger.com/blog-this.g?";
    
var href1 = "u=";
var href = location.href;
var desc1 = "&n=";
var desc = "ממליץ על אתר";
var title1 = "&t=";
var title2 = "\n";
var title =  document.title;
var title3 = "\n";

var url = uri + href1 + encodeURIComponent(href) + desc1 + encodeURIComponent(desc) + title1 + encodeURIComponent(title2 + title + title3);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function printshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
window.print('_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

    function copy1() {
var inputDump = document.createElement('input'),
hrefText = window.location.href;
document.body.appendChild(inputDump);
inputDump.value = hrefText;
inputDump.select();
document.execCommand('copy');
document.body.removeChild(inputDump);
alert("הועתק בהצלחה");
}

   function wan(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
 
var uri = "https://wa.me/";

var num = document.getElementById("phone").value;
var href1 = "?text=";
var text = document.getElementById("text").value;  

var url = uri + num + href1 + encodeURIComponent(text);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function smsn(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
 
var uri = "sms:";

var num = document.getElementById("phone").value;
var href1 = "?body=";
var text = document.getElementById("text").value;  

var url = uri + num + href1 + encodeURIComponent(text);

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function teln(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
 
var uri = "tel:+";

var kid = document.getElementById("inter").value;
var num = document.getElementById("phone").value;
 

var url = uri + num;

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function wanew(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
 
var uri = "https://gimo.co.il/url/wa";

var url = uri;

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function machshevon(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
 
var uri = "https://gimo.co.il/url/machshevon";

var url = uri;

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function smartlation(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
 
var uri = "https://www.smartlation.com/";

var url = uri;

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function jambo(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
 
var uri = "https://www.jumbomail.me";

var url = uri;

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

   function drive(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
 
var uri = "https://drive.google.com";

var url = uri;

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}

    function copymail() {
var inputDump = document.createElement('input'),
hrefText = "info@gimo.co.il";
document.body.appendChild(inputDump);
inputDump.value = hrefText;
inputDump.select();
document.execCommand('copy');
document.body.removeChild(inputDump);
alert("הועתק בהצלחה");
}

    function copymailhaifa() {
var inputDump = document.createElement('input'),
hrefText = "haifa@gimo.co.il";
document.body.appendChild(inputDump);
inputDump.value = hrefText;
inputDump.select();
document.execCommand('copy');
document.body.removeChild(inputDump);
alert("הועתק בהצלחה");
}

    function copymailbesser() {
var inputDump = document.createElement('input'),
hrefText = "besser@gimo.co.il";
document.body.appendChild(inputDump);
inputDump.value = hrefText;
inputDump.select();
document.execCommand('copy');
document.body.removeChild(inputDump);
alert("הועתק בהצלחה");
}
