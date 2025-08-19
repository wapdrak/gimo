
$('.maphaifa').on('click', function () {
$.alert({
    title: 'שיתוף דף/מוצר',
    type: 'blue',
    boxWidth: '85%',
    useBootstrap: false,
    theme: 'supervan',
	rtl: true,
    content: 'url://gimo.co.il/url/map-haifa/map.html',
    buttons: {
        ok: {
            text: 'יציאה',
        }
    }
});
});