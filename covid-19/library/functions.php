<?php

/*
 * This is my helper functions file.
 */

// Create nav for all views
function createNav($count)
{
    // Build a navigation bar using the $categories array
    $navList = '<ul id="navigation" class="hide">';
    foreach ($count as $counter) {
        $navList .= '<li><a href="#name' . $counter[0] . '">' . $counter[1] . '</a></li>';
    }
    $navList .= '</ul>';
    return $navList;
}

function createSidebar($count)
{
    // Build a navigation bar using the $categories array
    $navList = '<ul class="states">';
    $navList .= '<li class="mg-btm"><a href="http://covid-19datacurve.com/index.php?action=View+World+Data" title="World Covid-19 Data"><b>WORLD</b></a></li>';
    $navList .= '<li><a href="http://covid-19datacurve.com/" title="United States Covid-19 Data"><b>UNITED STATES</b></a></li>';
    foreach ($count as $counter) {
        $navList .= '<li><a href="#chartContainer-' . $counter[0] . '">' . $counter[1] . '</a></li>';
    }
    $navList .= '</ul>';
    return $navList;
}

//Get historical states data
function retrieveData()
{
    $unparsed_json = file_get_contents("https://covidtracking.com/api/v1/states/daily.json");
    $json_object = json_decode($unparsed_json, true);
    return $json_object;
}

function getStateAbbreviationToId()
{
    $db = acmeConnect();
    $sql = 'SELECT stateAbbreviation, stateId, stateName FROM states';
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $data = $stmt->fetchALL(PDO::FETCH_NUM);
    foreach ($data as $el) {
        $rowFormatted[$el[0]] = array("stateId" => $el[1], "stateName" => $el[2]);
    }
    $stmt->closeCursor();
    return $rowFormatted;
}

function saveToDb($record, $db, $stateLookup)
{
    $sql = "INSERT IGNORE INTO virusData (stateId, stateName, StatisticDate, Confirmed, Deceased, Recovered) 
    VALUES(:stateId,:stateName,:newDate,:Confirmed,:Deceased,:Recovered)";
    // The next line creates the prepared statement using the acme connection
    $stmt = $db->prepare($sql);
    // The next line replaces the placeholder in the SQL statement with the actual
    // values in the variables and tells the database the type of data it is
    $stateStuff = $stateLookup[$record['state']];
    $stmt->bindValue(':stateId', $stateStuff["stateId"], PDO::PARAM_INT);
    $stmt->bindValue(':stateName', $stateStuff["stateName"], PDO::PARAM_STR);
    $stmt->bindValue(':newDate', $record['date'], PDO::PARAM_STR);
    $stmt->bindValue(':Confirmed', $record['positive'], PDO::PARAM_INT);
    $stmt->bindValue(':Deceased', $record['death'], PDO::PARAM_INT);
    $stmt->bindValue(':Recovered', $record['recovered'], PDO::PARAM_INT);
    // Use the prepared statement to insert the data
    $stmt->execute();
    // Close the database interaction
    $stmt->closeCursor();
}

// insert historical data
function insertHistoricalData($data)
{
    $count = 0;
    $db = acmeConnect();
    $stateLookup =  getStateAbbreviationToId();
    foreach ($data as $record) {
        if (empty($record['death'])) {
            $record['death'] = 0;
        }
        if (empty($record['recovered'])) {
            $record['recovered'] = 0;
        }
        if (empty($record['positive'])) {
            $record['positive'] = 0;
        }
        saveToDb($record, $db, $stateLookup);
        $count++;
    }
}

//insert current data
function insertCurrentData($data)
{
    $today = date("Ymd");
    $count = 0;
    $db = acmeConnect();
    $stateLookup =  getStateAbbreviationToId();

    foreach ($data as $record) {

        if ($record['date'] == $today) {

            if (empty($record[$count]['death'])) {
                $record['death'] = 0;
            }
            if (empty($record[$count]['recovered'])) {
                $record['recovered'] = 0;
            }
            if (empty($record[$count]['positive'])) {
                $record['positive'] = 0;
            }
            //saveToDb($record, $db, $stateLookup);
        }
        //array_push($recordArray, $record['date'], $record['state'], $record['positive'], $record['recovered'], $record['death']);
        $count++;
    }
}

function convertDate($date)
{
    $newDay = substr($date, -2);
    $day = ltrim($newDay, "0");
    $newMonth = substr($date, -5, -3);
    $trimMonth = ltrim($newMonth, "0");
    $month = $trimMonth - 1;
    $year = substr($date, -10, -6);
    return 'new Date(' . $year . ', ' . $month . ', ' . $day . ')';
}


function separateStateData($compiledData)
{
    $MainArray = [56];
    $counter = 0;

    do {
        $state = [];
        array_push($MainArray, $state);
        $counter++;
    } while ($counter <= 56);

    foreach($compiledData as $data) {
        if ($data[0] > 0) { 
            //addToArray($MainArray, $data[0], $data);
        }
    }
    return $MainArray;
}

function addToArray($MainArray, $stateId, $record) {
    array_push($MainArray[$stateId - 1], $record);
}