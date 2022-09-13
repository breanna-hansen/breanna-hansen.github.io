<?php 
// Get the database connection file
require_once '../library/connections.php';

// Get the functions library
require_once '../library/functions.php';

// Get the data-model
require_once '../model/data-model.php';
// Create DOM from URL or file

$json = file_get_contents("https://covidtracking.com/api/v1/states/daily.json");
// Converts it into a PHP object
$data = json_decode($json, true);
//var_dump($data);
$count = 0;

//get the list of states if the
//state abbreviation is not in the list 
//then add it
//if we need to add it the add the abbreviation and 
//id to the array of stateAbbreviations.
$stateData = getStateAbbreviation();

foreach($data as $record) {
    $day = strtotime($data[$count]['date']);
    $myDate = date( 'yy-m-d', $day);

    $abbr = $data[$count]['state'];
    //echo $abbr . "<br>";
    //var_dump($stateData[0]);
    if(!in_array($abbr, $stateData[0])) {
        echo 'hello<br>';
        $stateId = getStateId($abbr);
        
        $name = getStateName($stateId);
        $stateName = $name[0];
        $newDate = $myDate;
        $Confirmed = $data[$count]['positive'];
        $Deceased = $data[$count]['death'];
        $Recovered = $data[$count]['recovered'];

        insert_Daily_Record($stateId,$stateName,$newDate, $Confirmed,$Deceased,$Recovered);
    } else {
        echo 'goodbye';
    }
 
    $count++;
}
?>
