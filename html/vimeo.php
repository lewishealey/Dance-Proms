<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require("vendor/autoload.php");

$client_id = "95b02dbb090fde51ed6e0900453f8add3221872e";
$client_secret = "hjIUvP6LcSh7SPikvmO5oaOD93aoaQ6zQf5no0Gt2HWkARbSn3DraiajbKhvlXE/p1H75vwqZFbLBdFLAl5MnPCnWv9IEFpdkx6P2xfKtrZSNTSFbL4Ml5loPblqMSmu";

$lib = new \Vimeo\Vimeo($client_id, $client_secret);

//687f4abf4cf31ba5412c1940228e0764
$token = $lib->clientCredentials("public");

// use the token
$lib->setToken('687f4abf4cf31ba5412c1940228e0764');

$response = $lib->request('/users/danceproms/videos', array('per_page' => 4), 'GET');
echo json_encode($response);





?>
