$('.sharebutton').on('click', function () {
$.alert({
    title: 'שיתוף דף',
    type: 'blue',
    boxWidth: '100%',
    useBootstrap: false,
    theme: 'supervan',
    content: 'url://gimo.co.il/url/share/sharehe.html',
    buttons: {
        ok: {
            text: 'יציאה',
            btnClass: 'bblue white blightblueh',
        }
    }
});
});

   function smsshare(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "sms:?";

var href1 = "body=";
var desc1 = "ממליץ על אתר";
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
var desc = "ממליץ על ";
var title =  document.title;
var href2 = "&bcc=";
var href3 = "gimonekuda1@gmail.com";
var href4 = "&body=";
var title2 = "--%0A%0A";	   
var href = location.href;

var url = uri + href1 + encodeURIComponent(desc) + encodeURIComponent(title) + href2 + encodeURIComponent(href3) + href4 + title2 + encodeURIComponent(href);

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
var hrefText = window.location.href;
document.body.appendChild(inputDump);
inputDump.value = hrefText;
inputDump.select();
document.execCommand('copy');
document.body.removeChild(inputDump);
alert("הועתק בהצלחה");

return false
}
