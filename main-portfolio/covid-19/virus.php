<?php

// Get the database connection file
require_once 'library/connections.php';

// Get the functions library
require_once 'library/functions.php';

// Get the data-model
require_once 'model/data-model.php';

// Include DOM parser
include('samples/simple_html_dom.php');

// Create DOM from URL or file
$html = file_get_html("https://ncov2019.live/data");

//to fetch all hyperlinks from a webpage
$tables = array();
foreach($html->find('table[id*="usa"]') as $table) {
 $tables[] = $table->innertext;
}

$str = $tables[0];

// Break states into array
$data = explode("&#9733",$str);
sort($data);

// Remove headers
$states = array_shift($data);

// Remove non-state items
unset($data[2]);
unset($data[9]);
unset($data[11]);
unset($data[14]);
unset($data[15]);
unset($data[17]);
unset($data[41]);
unset($data[46]);
unset($data[52]);
unset($data[53]);
unset($data[60]);
$renumberData = array_values($data);

// Loop through states array
$cellsArray = array();
foreach($data as $states){
       $cleanStates = strip_tags($states);
       $stripped = preg_replace('/\s+/', ' ', $cleanStates);
       $trimmed = trim($stripped);
       $substring = substr($trimmed, 2);
       $cellsArray[] = $substring;
   }

// Convert state data into array
$stateCell = array();
foreach($cellsArray as $cell) {
   $cells = explode(" ", $cell);
   $stateCell[] = $cells;
}

$finalData = array();
$stateArrays = array();
$cnt = 0;
foreach($stateCell as $data) {
       // If second index is only letters
       if(!preg_match('/[^A-Za-z]/', $data[1])) {
              $finalData[0] = $data[0] . " " . $data[1];
              $finalData[1] = $data[2];
              $finalData[2] = $data[5];
              if(count($data) < 9) {
                     $finalData[3] = $data[6];
              } else {
                     $finalData[3] = $data[8];
              }
              if(count($data) < 10) {
                     $finalData[4] = $data[7];
              } else {
                     $finalData[4] = $data[9];
              }
              //if third index is only letters
              if(!preg_match('/[^A-Za-z]/', $data[2])) {
                     $tripleString = $finalData[0] . " " . $data[2];
                     $finalData[0] = $tripleString;
                     $finalData[1] = $data[3];
                     $finalData[2] = $data[6];
                     if(count($data) < 9) {
                            $finalData[3] = $data[7];
                     } else {
                            $finalData[3] = $data[9];
                     }
                     if(count($data) < 10) {
                            $finalData[4] = $data[8];
                     } else {
                            $finalData[4] = $data[10];
                     }
              }
       // Single word states
       } else {
              $finalData[0] = $data[0];
              $finalData[1] = $data[1];
              $finalData[2] = $data[4];
              $finalData[3] = $data[7];
              $finalData[4] = $data[8];
       }
       // Concatenate words to create state name
       $stateArrays[$cnt] = array($finalData[0], $finalData[1], $finalData[2], $finalData[3], $finalData[4]);

       // Find and replace all commas
       $stateId = getStateInfo($finalData[0]);
       $stateName = str_replace(",","",$finalData[0]);
       $Confirmed = str_replace(",","",$finalData[1]);
       $Deceased = str_replace(",","",$finalData[2]);
       $Recovered = str_replace(",","",$finalData[3]);
       $Serious = str_replace(",","",$finalData[4]);
       
       // Insert new records
       insert_Daily_StateRecord($stateId, $stateName, $Confirmed,$Deceased,$Recovered,$Serious);

       // Increment count
       $cnt++;
}

?>