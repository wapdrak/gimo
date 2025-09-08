<?php
// --- Geo Redirector (Smart Server-Side v4) ---
// This script provides the best possible map experience based on the OS.
// It uses native protocols ('geo:', 'maps.apple.com') for mobile devices
// and falls back to a universal web map for desktops.

// 1. Get the search query from the URL parameter '?q='
$searchQuery = isset($_GET['q']) ? trim($_GET['q']) : null;

// 2. Proceed only if the search query is not empty
if ($searchQuery) {
    // 3. Prepare the query for use in a URL
    $encodedQuery = urlencode($searchQuery);

    // 4. Detect User Agent to determine the best redirect URL
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
    $redirectUrl = ''; // Initialize the final URL

    // --- Decision Logic ---

    // a) For Android, use the native 'geo:' protocol.
    // The mobile browser will pass this to the OS.
    if (preg_match('/android/i', $userAgent)) {
        $redirectUrl = "geo:0,0?q=" . $encodedQuery;
    }
    // b) For iOS, use the Apple Maps universal link.
    // It's a web URL that also triggers the native app.
    elseif (preg_match('/iphone|ipad|ipod/i', $userAgent)) {
        $redirectUrl = "https://maps.apple.com/?q=" . $encodedQuery;
    }
    // c) For all other cases (Windows, macOS, Linux desktops),
    // a web-based map is the only reliable option.
    else {
        $redirectUrl = "https://www.google.com/maps?q=" . $encodedQuery;
    }

    // 5. Perform the server-side redirect and stop the script
    header("Location: " . $redirectUrl, true, 302);
    exit();

} else {
    // 6. If '?q=' is missing, send a "Bad Request" error
    http_response_code(400);
    header('Content-Type: text/plain');
    echo "Error: The required 'q' parameter is missing.";
    exit();
}
?>
