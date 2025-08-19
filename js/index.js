
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('//gimo.co.il/url/js/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}


let deferredPrompt;
const addBtn = document.querySelector('.add');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {

  e.preventDefault();

  deferredPrompt = e;

  addBtn.style.display = 'inline';

  addBtn.addEventListener('click', (e) => {

    addBtn.style.display = 'none';

    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});