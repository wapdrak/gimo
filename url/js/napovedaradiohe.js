$('.napovedaradiohe').on('click', function () {
$.alert({
    rtl: true,
    title: '',
    type: 'blue',
    boxWidth: '75%',
    useBootstrap: false,
    theme: 'modern',
    content: 'url://www.prekladac.co/he/naw/napovedaradio.html',
    buttons: {
        ok: {
            text: 'הבנתי',
            btnClass: 'bblue white blightblueh',
        }
    }
});
});