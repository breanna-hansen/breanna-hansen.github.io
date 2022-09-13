<?php

// Get the database connection file
require_once 'library/connections.php';

// Get the functions library
require_once 'library/functions.php';

// Get the data-model
require_once 'model/data-model.php';

$stateIdArray = getStateIds();

?>

<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>COVID-19 Curve Charts for U.S.</title>
    <meta description="United States statistical COVID-19 data curve for each state and Washington D.C.">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!-- Add icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/medium.css">
    <link rel="stylesheet" href="css/large.css">
    <link rel="stylesheet" href="css/extra-large.css">
    <link rel="stylesheet" href="css/largest.css">
</head>

<body>
    <header>
        <div class="wrap">
            <h1>United States COVID-19 Statistics</h1>
            <h2>Statistical Data Curve for each State and Washington D.C. since March 31, 2020.</h2>
        </div>
        <div>
            <button class="menu-icon fa fa-bars" type="button" onclick="toggleHam()"></button>
            <a href="https://www.buymeacoffee.com/U9nayPo" target="_blank"><img class="coffee" src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee"></a>
        </div>
    </header>

    <nav class="stateLinks">
        <ul id="navigation" class="hide">
            <?php $states = getStateNames();
            $countContainers = 0;
            foreach ($states as $states) {
                echo '<li><a href="#chartContainer' . $countContainers . '">' . $states[0] . '</a></li>';
                $countContainers++;
            } ?>
        </ul>
    </nav>

    <main>
        <div>

        <p class="intro">Are we moving closer to normal life and safety? Look at the curve for your state to see where you are in the corona virus life 
            cycle.  When the new cases curve starts to level off or "flatten", it is an indication that the rate of spread in your area is 
            slowing. Public policy makers are looking closely at these curves to inform their decision making process.
        </p>
            <div class="stateLinks">
                <ul class="states">
                    <?php $states = getStateNames();
                    $countContainers = 0;
                    foreach ($states as $states) {
                        echo '<li><a href="#chartContainer' . $countContainers . '">' . $states[0] . '</a></li>';
                        $countContainers++;
                    } ?>
                </ul>
            </div>
            <?php
            $cnt = 0;
            echo '<script>
  window.onload = function () {';
            foreach ($stateIdArray as $data) {
                $stateName = getStateData($data[0]);

                echo 'var chart = new CanvasJS.Chart("chartContainer' . $cnt . '",
    {
      title:{
        text: "' . $stateName[1][1] . '",
        fontFamily: "Calibri",
        fontWeight: "bold"},
      axisX:{      
        valueFormatString: "MMM D" ,
        labelAngle: -50},
      legend: {horizontalAlign: "center", verticalAlign: "top"},
      toolTip:{content: "{y}" },
      data: [{        
        type: "spline",
        showInLegend: true,
        xValueFormatString: "D", 
        name: "Confirmed",
        legendText: "Confirmed",
        dataPoints: [';
                $count = 0;
                $confirmedData = getConfirmedData($data[0]);
                foreach ($confirmedData as $state) {
                    if ($count == 0) {
                        echo '{ x: new Date("' . $state[1] . '"), y: ' . $state[0] . '}';
                    } else {
                        echo ',{ x: new Date("' . $state[1] . '"), y: ' . $state[0] . '}';
                    }
                    $count++;
                }
                echo ']
      }, {        
        type: "spline",
        showInLegend: true, 
        name: "Deceased",
        legendText: "Deceased",
        dataPoints: [';
                $count2 = 0;
                $deceasedData = getDeceasedData($data[0]);
                foreach ($deceasedData as $state) {
                    if ($count2 == 0) {
                        echo '{ x: new Date("' . $state[1] . '"), y: ' . $state[0] . '}';
                    } else {
                        echo ',{ x: new Date("' . $state[1] . '"), y: ' . $state[0] . '}';
                    }
                    $count2++;
                }
                // { x: 10, y: 31 },
                echo ']
      }, {        
        type: "spline",
        showInLegend: true, 
        name: "Serious",
        legendText: "Serious",
        dataPoints: [';
                $count3 = 0;
                $seriousData = getSeriousData($data[0]);
                foreach ($seriousData as $state) {
                    if ($count3 == 0) {
                        echo '{ x: new Date("' . $state[1] . '"), y: ' . $state[0] . '}';
                    } else {
                        echo ',{ x: new Date("' . $state[1] . '"), y: ' . $state[0] . '}';
                    }
                    $count3++;
                }
                // { x: 10, y: 45 },
                echo ']
      }, {        
        type: "spline",
        showInLegend: true, 
        name: "Recovered",
        legendText: "Recovered",
        dataPoints: [';
                $count4 = 0;
                $recoveredData = getRecoveredData($data[0]);
                foreach ($recoveredData as $state) {
                    if ($count4 == 0) {
                        echo '{ x: new Date("' . $state[1] . '"), y: ' . $state[0] . '}';
                    } else {
                        echo ',{ x: new Date("' . $state[1] . '"), y: ' . $state[0] . '}';
                    }
                    $count4++;
                }
                echo ']
      }]
    });

    chart.render();';
                $cnt++;
            }
            echo '}</script>';
            ?>
            <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
            <div class="chartCompilation">
                <?php 
                $containerCount = 0;
                foreach($stateIdArray as $chart) {
                    echo '<div id="chartContainer' . $containerCount . '"style="height: 300px; width: 100%;"></div>';
                    $containerCount++;
                }
                ?>
            </div>
        </div>
    </main>
    <footer>
        <section>
            <div>
                <h2>About Me</h2>
                <p>Breanna Hansen is a student at Brigham Young University Idaho majoring in Website Design & Development with an Emphasis in
                    Development. She is available for hire as a freelance web developer or as an intern. Visit <a class="underline" href="https://www.breannaghansen.com">
                        breannaghansen.com</a> to learn more about her work.
                </p>
            </div>
            <div class="bar"></div>
        </section>
        <section>
            <div>
                <h2>Contact</h2>
                <p>Email: <a href="mailto:contact@breannaghansen.com">contact@breannaghansen.com</a></p>
                <p>Website: <a href="https://breannaghansen.com">breannaghansen.com</a></p>
                <p>Donate: <a href="https://www.buymeacoffee.com/U9nayPo" target="_blank"><img class="coffee coffee-footer" src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee"></a>
                </p>
            </div>
            <div class="bar"></div>
        </section>
        <section>
            <h2>Follow</h2>
            <a class="fa fa-instagram" href="https://www.instagram.com/breanna.g.hansen/" title="Instagram"></a>
            <a class="fa fa-twitter" href="https://twitter.com/BreannaGHansen" title="Twitter"></a>
            <a class="fa fa-youtube" href="https://www.youtube.com/channel/UCgtmwK20YUA7FykA-fjr-HA?view_as=subscriber" title="YouTube"></a>
        </section>
    </footer>

    <script src="js/toggle-ham.js"></script>
</body>