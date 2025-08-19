$('.napovedaprekladache').on('click', function () {
$.alert({
    rtl: true,
    title: '',
    type: 'blue',
    boxWidth: '75%',
    useBootstrap: false,
    theme: 'modern',
    content: 'url://www.prekladac.co/he/naw/napovedaprekladac.html',
    buttons: {
        ok: {
            text: 'הבנתי',
            btnClass: 'bblue white blightblueh',
        }
    }
});
});