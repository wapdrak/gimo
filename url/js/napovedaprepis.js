$('.napovedaprepis').on('click', function () {
$.alert({
    title: '',
    type: 'blue',
    boxWidth: '75%',
    useBootstrap: false,
    theme: 'modern',
    content: 'url://www.prekladac.co/cs/naw/napovedaprepis.html',
    buttons: {
        ok: {
            text: 'Rozumím',
            btnClass: 'bblue white blightblueh',
        }
    }
});
});