<?php

/*
 * COVID-19 Controller
 */

// Create or access a Session 
session_start();

// Get the database connection file
require_once 'library/connections.php';
// Get the acme model for use as needed
require_once 'model/data-model.php';
// Get the functions library
require_once 'library/functions.php';

// Default page title
$pageTitle = 'Home';

// Get data for all states 
$data = retrieveData(); // get JSON object
$count = getStateIdsAndNames();

// Build a navigation bar using the $states array
$nav = createNav($count);
$sidebarMenu = createSidebar($count);
$historyInsert = insertHistoricalData($data);

// Get data from database
$compiledData = getAllData();

// Create state arrays
$stateId1 = []; $stateId2 = []; $stateId3 = []; $stateId4 = []; $stateId5 = []; $stateId6 = []; $stateId7 = []; $stateId8 = [];
$stateId9 = []; $stateId10 = []; $stateId11 = []; $stateId12 = []; $stateId13 = []; $stateId14 = []; $stateId15 = []; 
$stateId16 = []; $stateId17 = []; $stateId18 = []; $stateId19 = []; $stateId20 = []; $stateId21 = []; $stateId22 = []; 
$stateId23 = []; $stateId24 = []; $stateId25 = []; $stateId26 = []; $stateId27 = []; $stateId28 = []; $stateId29 = [];
$stateId30 = []; $stateId31 = []; $stateId32 = []; $stateId33 = []; $stateId34 = []; $stateId35 = []; $stateId36 = []; 
$stateId37 = []; $stateId38 = []; $stateId39 = []; $stateId40 = []; $stateId41 = []; $stateId42 = []; $stateId43 = [];
$stateId44 = []; $stateId45 = []; $stateId46 = []; $stateId47 = []; $stateId48 = []; $stateId49 = []; $stateId50 = []; 
$stateId51 = []; $stateId52 = []; $stateId53 = []; $stateId54 = []; $stateId55 = []; $stateId56 = [];

$counter = 1;
foreach ($compiledData as $data) {

    // Switch case to for each state
    switch ($data[0]) {
        case '1':
            array_push($stateId1, $data);
            break;
        case '2':
            array_push($stateId2, $data);
            break;
        case '3':
            array_push($stateId3, $data);
            break;
        case '4':
            array_push($stateId4, $data);
            break;
        case '5':
            array_push($stateId5, $data);
            break;
        case '6':
            array_push($stateId6, $data);
            break;
        case '7':
            array_push($stateId7, $data);
            break;
        case '8':
            array_push($stateId8, $data);
            break;
        case '9':
            array_push($stateId9, $data);
            break;
        case '10':
             array_push($stateId10, $data);
            break;
        case '11':
             array_push($stateId11, $data);
            break;
        case '12':
             array_push($stateId12, $data);
            break;
        case '13':
             array_push($stateId13, $data);
            break;
        case '14':
             array_push($stateId14, $data);
            break;
        case '15':
             array_push($stateId15, $data);
            break;
        case '16':
             array_push($stateId16, $data);
            break;
        case '17':
             array_push($stateId17, $data);
            break;
        case '18':
             array_push($stateId18, $data);
            break;
        case '19':
             array_push($stateId19, $data);
            break;
        case '20':
             array_push($stateId20, $data);
            break;
        case '21':
             array_push($stateId21, $data);
            break;
        case '22':
             array_push($stateId22, $data);
            break;
        case '23':
             array_push($stateId23, $data);
            break;
        case '24':
             array_push($stateId24, $data);
            break;
        case '25':
             array_push($stateId25, $data);
            break;
        case '26':
             array_push($stateId26, $data);
            break;
        case '27':
             array_push($stateId27, $data);
            break;
        case '28':
             array_push($stateId28, $data);
            break;
        case '29':
             array_push($stateId29, $data);
            break;
        case '30':
             array_push($stateId30, $data);
            break;
        case '31':
             array_push($stateId31, $data);
            break;
        case '32':
             array_push($stateId32, $data);
            break;
        case '33':
             array_push($stateId33, $data);
            break;
        case '34':
             array_push($stateId34, $data);
            break;
        case '35':
             array_push($stateId35, $data);
            break;
        case '36':
             array_push($stateId36, $data);
            break;
        case '37':
             array_push($stateId37, $data);
            break;
        case '38':
             array_push($stateId38, $data);
            break;
        case '39':
             array_push($stateId39, $data);
            break;
        case '40':
             array_push($stateId40, $data);
            break;
        case '41':
             array_push($stateId41, $data);
            break;
        case '42':
             array_push($stateId42, $data);
            break;
        case '43':
             array_push($stateId43, $data);
            break;
        case '44':
             array_push($stateId44, $data);
            break;
        case '45':
             array_push($stateId45, $data);
            break;
        case '46':
             array_push($stateId46, $data);
            break;
        case '47':
             array_push($stateId47, $data);
            break;
        case '48':
             array_push($stateId48, $data);
            break;
        case '49':
             array_push($stateId49, $data);
            break;
        case '50':
             array_push($stateId50, $data);
            break;
        case '51':
             array_push($stateId51, $data);
            break;
        case '52':
             array_push($stateId52, $data);
            break;
        case '53':
             array_push($stateId53, $data);
            break;
        case '54':
             array_push($stateId54, $data);
            break;
        case '55':
             array_push($stateId55, $data);
            break;
        case '56':
             array_push($stateId56, $data);
            break;
        default:
            break;
    }  
}

$MainArray = array($stateId1, $stateId2, $stateId3, $stateId4, $stateId5, $stateId6, $stateId7, $stateId8, $stateId9, $stateId10,
$stateId11, $stateId12, $stateId13, $stateId14, $stateId15, $stateId16, $stateId17, $stateId18, $stateId19, $stateId20, $stateId21,
$stateId22, $stateId23, $stateId24, $stateId25, $stateId26, $stateId27, $stateId28, $stateId29, $stateId30, $stateId31, $stateId32,
$stateId33, $stateId34, $stateId35, $stateId36, $stateId37, $stateId38, $stateId39, $stateId40, $stateId41, $stateId42, $stateId43, 
$stateId44, $stateId45, $stateId46, $stateId47, $stateId48, $stateId49, $stateId50, $stateId51, $stateId52, $stateId53, $stateId54,
$stateId55, $stateId56);

//Do POST or GET
$action = filter_input(INPUT_POST, 'action');
 if ($action == NULL){
  $action = filter_input(INPUT_GET, 'action');
}

// Switch case to choose page
switch ($action){
    case 'template':
        $pageTitle = 'Template';
        include 'template/template.php';
    break;
    case 'View World Data':
        $pageTitle = "World";
        include 'view/world.php';
        break;
    default:
        $pageTitle = 'Home';
        include 'view/home.php';
}





