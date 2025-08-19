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
    title: 'Přejít na adresu',
    content: '' +
    '<form action="" class="formName">' +
    '<div class="form-group">' +
    '<p>Zadejte adresu stránek, na které chete přejít<br><br>' +
	'<u>Například:</u><br><br>' +
	'detektor<br>' +
	'prekladac<br>' +
	'radio<br><br>' +
	'Pokud chcete přejít na jiné stránky, zadejte celou url adresu včetně http:// nebo https://' +
	'</p>' +
    '<label>URL:</label>' +
    '<input type="text" placeholder="URL adresa" class="name form-control" required />' +
    '</div>' +
    '</form>',
    buttons: {
        formSubmit: {
            text: 'Přejít',
            btnClass: 'btn-blue',
            keys: ['enter'],
            action: function () {
                var name = this.$content.find('.name').val();
                if(!name){
        $.alert({
    draggable: true,
    closeIcon: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "Chyba",
    content: "Nebyla zadána url adresa",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
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
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-info",
    title: "Poznámka",
    content: "Zjistěte, jestli je váš překlad skutečný nebo strojový",
    type: 'blue',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
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
    draggable: true,
    closeIcon: true,
	animation: 'rotate',
    icon: "fa fa-info",
    title: "Poznámka",
    content: "Porovnejte výsledky tří nejlepších překladačů",
    type: 'blue',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
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

                if(name == "radio"){
        $.alert({
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-info",
    title: "Poznámka",
    content: "Přejeme příjemný poslech",
    type: 'blue',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
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
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "Chyba",
    content: "Adresa je neúplná",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }

				
				
                if(name == "https://w"){
        $.alert({
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "Chyba",
    content: "Adresa je neúplná",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }			
				
	
				
                if(name == "https://ww"){
        $.alert({
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "Chyba",
    content: "Adresa je neúplná",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }
				
	
				
                if(name == "https://www"){
        $.alert({
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "Chyba",
    content: "Adresa je neúplná",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }
				
				

                if(name == "https://www."){
        $.alert({
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "Chyba",
    content: "Adresa je neúplná",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }
				
				
				

                if(name == "http://"){
        $.alert({
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "Chyba",
    content: "Adresa je neúplná",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }

				
				
                if(name == "http://w"){
        $.alert({
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "Chyba",
    content: "Adresa je neúplná",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }			
				
	
				
                if(name == "http://ww"){
        $.alert({
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "Chyba",
    content: "Adresa je neúplná",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }
				
	
				
                if(name == "http://www"){
        $.alert({
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "Chyba",
    content: "Adresa je neúplná",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }
				
				

                if(name == "http://www."){
        $.alert({
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-warning",
    title: "Chyba",
    content: "Adresa je neúplná",
    type: 'red',
    typeAnimated: true,
    buttons: {
        button: {
            text: "Rozumím",
            btnClass: "btn-blue",
            keys: ['enter'],
} 
} 	
});
                    return  false;
                }
				

				
        $.alert({
    closeIcon: true,
    draggable: true,
	animation: 'rotate',
    icon: "fa fa-info",
    title: "Poznámka...",
    content: "Doufáme, že se ještě vrátíte",
    type: 'blue',
    typeAnimated: true,
    buttons: {
        Zavřít: {
            text: "Zavřít",
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
		

        Zavřít: function () { 
        $.alert({
    closeIcon: true,
    draggable: true,
	animation: 'opacity',
    icon: "fa fa-smile-o",
    title: "Poznámka...",
    content: "Zůstat na těchto stránkách byla skvělá volba :))",
    type: 'blue',
    typeAnimated: true,
    buttons: {
        Zavřít: {
            text: "Zavřít",
            btnClass: "btn-blue",
            keys: ['enter', 'esc'],
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