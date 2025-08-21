$('.podminkydetektor').on('click', function () {
$.alert({
    title: '',
    type: 'red',
    boxWidth: '75%',
    useBootstrap: false,
    theme: 'modern',
    content: 'url://www.prekladac.co/cs/naw/podminkydetektor.html',
    buttons: {
        ok: {
            text: 'Souhlasím',
            btnClass: 'bred white byellowh',
        }
    }
});
});