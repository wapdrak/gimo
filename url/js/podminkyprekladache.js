$('.podminkyprekladache').on('click', function () {
$.alert({
    rtl: true,
    title: '',
    type: 'red',
    boxWidth: '75%',
    useBootstrap: false,
    theme: 'modern',
    content: 'url://www.prekladac.co/he/naw/podminkyprekladac.html',
    buttons: {
        ok: {
            text: 'הבנתי',
            btnClass: 'bred white byellowh',
        }
    }
});
});