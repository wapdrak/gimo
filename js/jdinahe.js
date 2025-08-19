$('.url').on('click', function () {
$.confirm({
    boxWidth: '70%',
    useBootstrap: false,
    draggable: true,
    dragWindowBorder: true,
	animation: 'bottom',
    closeAnimation: 'opacity',
	animationBounce: 2,
    animationSpeed: 1000,
    backgroundDismissAnimation: 'glow',
	type: 'green',
    escapeKey: 'Zavřít',
    closeIcon: true,
	rtl: true,
    title: 'לעבור לאתר',
    content: '' +
    '<form action="" class="formName">' +
    '<div class="form-group">' +
    '<p>נא להזין כתובת האתר<br><br>' +
	'<u>לדוגמה:</u><br><br>' +
	'detektor<br>' +
	'prekladac<br>' +
	'radio<br><br>' +
	'למעבר לאתר אחר יש להזין כתובת כולל //:http או //:https' +
	'</p>' +
    '<label dir="ltr">URL:</label>' +
    '<input dir="ltr" type="text" placeholder="URL adresa" class="name form-control" required />' +
    '</div>' +
    '</form>',
	type: 'green',
    typeAnimated: true,
	rtl: true,
    buttons: {
        formSubmit: {
            text: 'מעבר',
            btnClass: 'btn-blue',
            keys: ['enter'],
            action: function () {
                var name = this.$content.find('.name').val();
                if(!name){
        $.alert({
	rtl: true,
    icon: "fa fa-warning",
    title: "שגיעה",
    content: "לא הוזן כתובת האתר",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-red",
            keys: ['enter'],
} 
} 	
});
  		 window.location.href = "#main";
                    return false;
                }
				
                if(name == "detektor"){
        $.alert({
	rtl: true,
    icon: "fa fa-info",
    title: "הערה....",
    content: "לבדיקת תרגום - תרגום אנושי או תרגום מכונה",
    type: 'blue',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-blue",
            keys: ['enter'],
            action: function(){
  		 window.location.href = name;
            }
} 
} 
});
                    return true;
                }
				
                if(name == "prekladac"){
        $.alert({
	rtl: true,
    icon: "fa fa-info",
    title: "הערה....",
    content: "להשוות בין תרגום מכונות הטובות בעולם",
    type: 'blue',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-blue",
            keys: ['enter'],
            action: function(){
  		 window.location.href = name;
            }
} 
} 	
});
                    return true;
                }				




                if(name == "https://"){
        $.alert({
	rtl: true,
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "שגיאה....",
    content: "הכתובת לא מלאה",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }

				
				
                if(name == "https://w"){
        $.alert({
	rtl: true,
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "שגיאה....",
    content: "הכתובת לא מלאה",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }			
				
	
				
                if(name == "https://ww"){
        $.alert({
	rtl: true,
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "שגיאה....",
    content: "הכתובת לא מלאה",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }
				
	
				
                if(name == "https://www"){
        $.alert({
	rtl: true,
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "שגיאה....",
    content: "הכתובת לא מלאה",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }
				
				

                if(name == "https://www."){
        $.alert({
	rtl: true,
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "שגיאה....",
    content: "הכתובת לא מלאה",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }
				
				
				

                if(name == "http://"){
        $.alert({
	rtl: true,
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "שגיאה....",
    content: "הכתובת לא מלאה",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }

				
				
                if(name == "http://w"){
        $.alert({
	rtl: true,
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "שגיאה....",
    content: "הכתובת לא מלאה",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }			
				
	
				
                if(name == "http://ww"){
        $.alert({
	rtl: true,
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "שגיאה....",
    content: "הכתובת לא מלאה",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }
				
	
				
                if(name == "http://www"){
        $.alert({
	rtl: true,
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "שגיאה....",
    content: "הכתובת לא מלאה",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }
				
				

                if(name == "http://www."){
        $.alert({
	rtl: true,
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "שגיאה....",
    content: "הכתובת לא מלאה",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "הבנתי",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }
				

				
				
        $.alert({
	rtl: true,
    icon: "fa fa-info",
    title: "הערה....",
    content: "תבואו לבקר שוב",
    type: 'blue',
    typeAnimated: true,
    buttons: {
        button: {
            text: "לסגור",
            btnClass: "btn-blue",
            keys: ['enter'],
            action: function(){
  		  window.open(name);
            }
} 
} 
});	
            }
        },
		
		
        לסגור: function () { 
        $.alert({
	rtl: true,
    icon: "fa fa-smile-o",
    title: "הערה....",
    content: "להישאר באתר זה, הינה בחירה נפלה :))",
    type: 'blue',
    typeAnimated: true,
    buttons: {
        button: {
            text: "לסגור",
            btnClass: "btn-blue",
            keys: ['enter'],
}
}
});
   		        window.location.href = "#main";	
        },
    },
    onContentReady: function () {
        // bind to events
        var jc = this;
        this.$content.find('form').on('submit', function (e) {
            // if the user submits the form by pressing enter in the field.
            e.preventDefault();
            jc.$$formSubmit.trigger('click'); // reference the button and click it
        });
	}	
});
});