<?php

/*
 * Data Model
 */

// get data for individual state
function getStateData($stateId) {
    $db = acmeConnect();
    $sql = 'SELECT * FROM virusData WHERE stateId = :stateId';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':stateId', $stateId, PDO::PARAM_INT);
    $stmt->execute();
    $data = $stmt->fetchALL(PDO::FETCH_NUM);
    $stmt->closeCursor();
    return $data;
}

// Get state name
function getStateName($stateId) {
    $db = acmeConnect();
    $sql = 'SELECT stateName FROM states WHERE stateId = :stateId';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':stateId', $stateId, PDO::PARAM_INT);
    $stmt->execute();
    $data = $stmt->fetch(PDO::FETCH_NUM);
    $stmt->closeCursor();
    return $data; 
}

// get all state names
function getStateNames() {
    $db = acmeConnect();
    $sql = 'SELECT stateName FROM states';
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $data = $stmt->fetchALL(PDO::FETCH_NUM);
    $stmt->closeCursor();
    return $data;
}

 // insert daily data
 function insert_Daily_Record($stateId,$stateName,$newDate, $Confirmed,$Deceased,$Recovered){
    $db = acmeConnect();
    $sql = "INSERT INTO virusData (stateId, stateName, StatisticDate, Confirmed, Deceased, Recovered) 
    VALUES(:stateId,:stateName,:newDate,:Confirmed,:Deceased,:Recovered)";
     // The next line creates the prepared statement using the acme connection
     $stmt = $db->prepare($sql);
     // The next line replaces the placeholder in the SQL statement with the actual
    // values in the variables and tells the database the type of data it is
    $stmt->bindValue(':stateId', $stateId, PDO::PARAM_INT);
    $stmt->bindValue(':stateName', $stateName, PDO::PARAM_STR);
    $stmt->bindValue(':newDate', $newDate, PDO::PARAM_STR);
    $stmt->bindValue(':Confirmed', $Confirmed, PDO::PARAM_INT);
    $stmt->bindValue(':Deceased', $Deceased, PDO::PARAM_INT);
    $stmt->bindValue(':Recovered', $Recovered, PDO::PARAM_INT);
    // Use the prepared statement to insert the data
    $stmt->execute();  
    // Close the database interaction
    $stmt->closeCursor();
}

// get individual state information by state name
function getStateId($abbreviation) {
    $db = acmeConnect();
    $sql = 'SELECT stateId FROM states WHERE stateAbbreviation = :abbreviation';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':abbreviation', $abbreviation, PDO::PARAM_STR);
    $stmt->execute();
    $stateInfo = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $stateInfo["stateId"];
}

// get all state id numbers
function getStateAbbreviation() {
    $db = acmeConnect();
    $sql = 'SELECT stateAbbreviation FROM states';
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $data = $stmt->fetchALL(PDO::FETCH_NUM);
    $stmt->closeCursor();
    return $data;
}

// create state id numbers
function createStateId($stateName) {
    $db = acmeConnect();
    $sql = "INSERT INTO states (stateName) VALUES (:stateName)";
     // The next line creates the prepared statement using the acme connection
     $stmt = $db->prepare($sql);
     // The next line replaces the placeholder in the SQL statement with the actual
    // values in the variables and tells the database the type of data it is
    $stmt->bindValue(':stateName', $stateName, PDO::PARAM_STR);
    // Use the prepared statement to insert the data
    $stmt->execute();  
    // Close the database interaction
    $stmt->closeCursor();
}

// get individual state information by state
function getStateInfo($stateName) {
    $db = acmeConnect();
    $sql = 'SELECT stateId FROM states WHERE stateName = :stateName';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':stateName', $stateName, PDO::PARAM_STR);
    $stmt->execute();
    $stateInfo = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $stateInfo["stateId"];
}

function getAllData() {
    $db = acmeConnect();
    $sql = 'SELECT * FROM virusData';
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $data = $stmt->fetchALL(PDO::FETCH_NUM);
    $stmt->closeCursor();
    return $data;
}

// get all state id numbers
function getStateIdsAndNames() {
    $db = acmeConnect();
    $sql = 'SELECT * FROM states';
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $data = $stmt->fetchALL(PDO::FETCH_NUM);
    $stmt->closeCursor();
    return $data;
}