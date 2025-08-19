$('.podminkyprekladac').on('click', function () {
$.alert({
    title: '',
    type: 'red',
    boxWidth: '75%',
    useBootstrap: false,
    theme: 'modern',
    content: 'url://www.prekladac.co/cs/naw/podminkyprekladac.html',
    buttons: {
        ok: {
            text: 'Souhlasím',
            btnClass: 'bred white byellowh',
        }
    }
});
});