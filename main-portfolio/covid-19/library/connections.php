<?php

/*
 *Database connections
*/

function acmeConnect() {
    $server = "localhost";
    $database = "dapperf2_covid-19";
    $user = "dapperf2_breanna";
    $password = "i2lQXnAkLCszygcw";
    $dsn = 'mysql:host=' . $server . ';dbname=' . $database;
    $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);

    try {
        $link = new PDO($dsn, $user, $password, $options);        
        return $link;
    } catch (PDOException $exc) {
        echo $exc;
        exit;
    }
}


?>