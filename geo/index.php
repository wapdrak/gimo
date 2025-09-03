<?php
// --- Geo Redirector (Hybrid with OS Detection) ---
// This script detects the user's operating system to provide the optimal map link,
// generates a dynamic HTML page that attempts an automatic redirect,
// and immediately provides visible fallback links.

// 1. Get the search query from the URL parameter '?q='
$searchQuery = isset($_GET['q']) ? trim($_GET['q']) : null;

// 2. Check if the search query exists and is not empty
if ($searchQuery) {
    // 3. Prepare variables for URLs and display
    $encodedQuery = urlencode($searchQuery);
    // Escape the query for safe display within HTML
    $escapedSearchQuery = htmlspecialchars($searchQuery, ENT_QUOTES, 'UTF-8');

    // 3a. Detect User Agent to determine the correct map protocol
    $userAgent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';
    $mapUrl = ''; // Initialize the map URL for the native app

    if (stripos($userAgent, 'android') !== false) {
        // Android uses the geo: protocol
        $mapUrl = "geo:0,0?q=" . $encodedQuery;
    } elseif (stripos($userAgent, 'iphone') !== false || stripos($userAgent, 'ipad') !== false || stripos($userAgent, 'ipod') !== false || stripos($userAgent, 'macintosh') !== false) {
        // For Apple devices, the universal web link is most robust.
        // It works in the browser and prompts to open the native Apple Maps app.
        $mapUrl = "https://maps.apple.com/?q=" . $encodedQuery;
    } elseif (stripos($userAgent, 'windows') !== false) {
        // Windows devices use the bingmaps: protocol to open the native Maps app.
        // This is the modern standard, replacing older "ms-" prefixed protocols.
        $mapUrl = "bingmaps:?q=" . $encodedQuery;
    } else {
        // Fallback for other OS (Linux, etc.)
        // The geo: protocol is a reasonable default.
        $mapUrl = "geo:0,0?q=" . $encodedQuery;
    }

    // Universal web fallback URL remains the same (Google Maps)
    $webMapUrl = "https://www.google.com/maps/search/?api=1&query=" . $encodedQuery;

    // 4. Output an HTML page with a JS redirect attempt and visible fallback links.
    echo <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Opening Location</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; text-align: center; padding: 2rem; background-color: #f4f7f6; }
        .container { background-color: white; padding: 2rem; border-radius: 12px; max-width: 500px; margin: auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .button { display: inline-block; background-color: #007aff; color: white !important; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 1rem; font-weight: bold; }
        .web-link { display: block; margin-top: 1rem; color: #555; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Opening "$escapedSearchQuery"...</h1>
        <p>Your browser should ask for permission to open your maps app.</p>
        <p>If nothing happens, please use a link below.</p>
        <a href="$mapUrl" class="button">Open in Map App</a>
        <a href="$webMapUrl" target="_blank" class="web-link">Or open in Google Maps (Web)</a>
    </div>

    <script>
        // Attempt to trigger the redirect automatically using the platform-specific URL.
        // If blocked, the user already has the visible links as a fallback.
        window.location.href = "$mapUrl";
    </script>
</body>
</html>
HTML;

    // 5. Immediately stop the script.
    exit;
    
} else {
    // 6. If the '?q=' parameter is missing, display a helpful error page.
    http_response_code(400);

    // Dynamically determine the current script's URL for a clickable example
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
    $host = $_SERVER['HTTP_HOST'];
    $scriptName = $_SERVER['SCRIPT_NAME'];
    $exampleUrl = htmlspecialchars("{$protocol}://{$host}{$scriptName}?q=London");

    echo "<h1>Error: Missing Parameter</h1>";
    echo "<p>The required <code>q</code> parameter is missing from the URL.</p>";
    echo "<p>Please provide a search term, for example, by clicking this link:</p>";
    echo "<a href='{$exampleUrl}'>{$exampleUrl}</a>"; // Clickable example
    exit;
}
?>

