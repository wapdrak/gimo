<!DOCTYPE html>
<html lang="he">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="description" content="שליחת הודעת WhatsApp לכל מספר. לא חייבים להוסיף איש קשר לטלפון כדי לשלוח לו הודעת וואטסאפ">
        <meta name="keywords" content="שירות, שירות.נט, שירותנט, וואטסאפ, whatsapp">
        <meta name="theme-color" content="#25D366">
        <meta property="fb:app_id" content="180973318611621" />
        <meta property="og:title" content="שירות.נט | שליחת הודעת וואטסאפ לכל מספר" /> 
        <meta property="og:image" content="https://png.icons8.com/color/1200/whatsapp.png" />
        <meta property="og:description" content="שליחת הודעת WhatsApp לכל מספר. לא חייבים להוסיף איש קשר לטלפון כדי לשלוח לו הודעת וואטסאפ" />
        <meta property="og:site_name" content="שליחת וואטסאפ" />

        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

        
        
                
        <link href="https://accounts.google.com" rel="preconnect" >
        <link href="https://adservice.google.com" rel="preconnect" >
        <link href="https://adservice.google.co.il" rel="preconnect" >
        <link href="https://pagead2.googlesyndication.com" rel="preconnect" >
        <link href="https://staticxx.facebook.com" rel="preconnect" >
        <link href="https://apis.google.com" rel="preconnect" >
        <link href="https://servul.azureedge.net" rel="preconnect" >
        <link href="https://res.cloudinary.com" rel="preconnect" >
        <link href="https://fonts.googleapis.com" rel="preconnect" >
        <link href="https://connect.facebook.net" rel="preconnect" >

        <link rel="preload" href="https://servul.azureedge.net/include/AngularJS/angular-material.min.css?v=4.2.15" as="style" />
        <link rel="preload" href="https://servul.azureedge.net/include/style.css?v=4.2.15" as="style" />
        <link rel="preload" href="https://servul.azureedge.net/include/style_rtl.css?v=4.2.15" as="style" />
                
        <link rel="preload" href="https://fonts.gstatic.com/s/assistant/v4/2sDcZGJYnIjSi6H75xkzamW5O7w.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="https://fonts.gstatic.com/s/assistant/v4/2sDcZGJYnIjSi6H75xkzaGW5.woff2" as="font" type="font/woff2" crossorigin>

        <link rel="preload" href="https://servul.azureedge.net/include/AngularJS/AngularJS_All_176.js" as="script">
        <link rel="preload" href="https://servul.azureedge.net/include/AngularJS/angular-material.min.js?v=20" as="script">
        <link rel="preload" href="https://servul.azureedge.net/ServulApp.js?v=4.2.15" as="script">

        <!-- <link href="https://fonts.googleapis.com/css?family=Assistant&display=swap" rel="stylesheet"> -->

                <link rel="manifest" href="/manifest_sherut.json">
                <link rel="icon" type="image/png" href="https://res.cloudinary.com/sherutnet/image/upload/c_scale,w_32/e_colorize,co_rgb:25D366/v1558593022/bw32_kt3yxa.png">

        <title>שירות.נט | שליחת הודעת וואטסאפ לכל מספר</title>

        

        <link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/lkcicaigapaemfihekdebhinojkommab">
        <link href="https://servul.azureedge.net/include/AngularJS/angular-material.min.css?v=4.2.15" rel="stylesheet" type="text/css">
        <link href="https://servul.azureedge.net/include/style.css?v=4.2.15" rel="stylesheet" type="text/css">
                    <link href="https://servul.azureedge.net/include/style_rtl.css?v=4.2.15" rel="stylesheet" type="text/css">
        


    </head>

    <body data-ng-app="ServulApp" data-layout="row" ng-controller="MenuAndBarCtrl" >
        

<section ng-cloak ng-controller="CompCtrl">
    <md-content class="md-padding" style="background: transparent;margin: 20px auto 80px;">
    <div style="text-align: center;margin-top: 10px;">
        <md-icon md-svg-src="/img/svg/whatsapp.svg" class="comp-channel-icon social-icons" style="color: #25D366;" ></md-icon>
        <h1 class="md-title comp-h1">שליחת הודעת וואטסאפ לכל מספר</h1>
        
      </div>
        <div>
          <p class="md-body-1">
          <form name="userForm" ng-cloak style="text-align: center;">
              <md-input-container class="md-block" style="margin: 60px 20px 20px;">
                <label>מספר טלפון (אליו תשלח ההודעה)</label>
                <input name="whatsappphone" type="tel" eopd-enter="OpenWhatsappTab(whatsappphone)" ng-model="whatsappphone" autofocus ng-minlength="9" ng-pattern="/^[+]?[0-9,a]*[\.,\-]?[0-9]+[\.,\-]?[0-9]+$/" />
                <div ng-messages="userForm.whatsappphone.$error">
                  <div ng-message="pattern">מספר טלפון תקין בבקשה</div>
                  <div ng-message="minlength">מינימום 10 ספרות</div>
                </div>
              </md-input-container>
              <md-button ng-disabled="!whatsappphone" class="w-button" ng-click="OpenWhatsappTab(whatsappphone)" type="submit">שליחה</md-button>

          </form>
          </p>
        </div>
        
    </md-content>

    <md-divider></md-divider>
    <div style="margin:30px auto;text-align:center;">
        <h2 class="md-caption comp-h2">לא חייבים להוסיף איש קשר לטלפון כדי לשלוח לו הודעת וואטסאפ</h2>
        <h4 class="md-caption comp-h4">
            <br>אפשר פשוט לכתוב (או להדביק) כאן את המספר וללחוץ על "שליחה",
            <br>אנחנו נעביר אתכם לאפליקצית WhatsApp לכתיבת ההודעה.
        </h4>
    </div>
</section>            
                                    <div ng-cloak class="md-caption PageFooter" ng-show="!loading"></div>
                       


    <script src="https://servul.azureedge.net/include/AngularJS/AngularJS_All_176.js" type="text/javascript"></script>
    <script src="https://servul.azureedge.net/include/AngularJS/angular-material.min.js" type="text/javascript"></script>
    <script src="https://servul.azureedge.net/ServulApp.js?v=4.2.15"></script>
    <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script>
    
 
</body>
</html>