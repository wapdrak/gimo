// Soubor: /api/redirect.js

export default function handler(request, response) {
  // 1. Získáme parametr 'q' z URL
  const searchQuery = request.query.q;

  // 2. Zkontrolujeme, jestli existuje
  if (searchQuery) {
    const encodedQuery = encodeURIComponent(searchQuery);
    const userAgent = request.headers['user-agent'] || '';
    let redirectUrl = '';

    // --- Rozhodovací logika ---
    if (/android/i.test(userAgent)) {
      redirectUrl = `geo:0,0?q=${encodedQuery}`;
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      redirectUrl = `https://maps.apple.com/?q=${encodedQuery}`;
    } else {
      // Záloha pro desktopy (Windows, Mac, Linux)
      redirectUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
    }

    // 3. Provedeme přesměrování
    response.redirect(302, redirectUrl);

  } else {
    // 4. Pokud 'q' chybí, vrátíme chybu
    response.status(400).send("Error: The required 'q' parameter is missing.");
  }
}
