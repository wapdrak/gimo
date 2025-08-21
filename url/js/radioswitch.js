var verze = document.location.protocol

    switch (verze) {
    
       case 'http:':
		       skript = 'radio.js';
             break;
             
       case 'https:':
		        skript = 'radio.js';
             break;
             
       default:
                skript = 'radio.js';
                
} 

document.write('<script src="'+skript+'" onload="javascript:hudba();"><\/script>');