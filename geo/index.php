<?php
// Soubor: /geo/index.php

$searchQuery = isset($_GET['q']) ? trim($_GET['q']) : null;

if ($searchQuery) {
    $encodedQuery = urlencode($searchQuery);
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
    $redirectUrl = '';

    if (preg_match('/android/i', $userAgent)) {
        $redirectUrl = "geo:0,0?q=" . $encodedQuery;
    } elseif (preg_match('/iphone|ipad|ipod/i', $userAgent)) {
        $redirectUrl = "https://maps.apple.com/?q=" . $encodedQuery;
    } else {
        $redirectUrl = "https://www.google.com/maps?q=" . $encodedQuery;
    }

    header("Location: " . $redirectUrl, true, 302);
    exit();

} else {
    http_response_code(400);
    header('Content-Type: text/plain');
    echo "Error: The required 'q' parameter is missing.";
    exit();
}
?>
