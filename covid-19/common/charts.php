<?php

$cnt2 = 0;
echo '<script>
window.onload = function () {';
foreach ($MainArray as $state) {
    echo 'var chart = new CanvasJS.Chart("chartContainer-' . $cnt2 . '",
{
title:{
text: "' . $state[0][1] . '",
fontFamily: "Calibri",
fontWeight: "bold"},
axisX:{      
valueFormatString: "MMM D",
labelAngle: -50},
legend: {horizontalAlign: "center", verticalAlign: "top"},
data: [{        
type: "spline",
showInLegend: true,
xValueFormatString: "MMM D", 
name: "Confirmed",
legendText: "Confirmed",
dataPoints: [';
    $counter = 0;
    foreach ($state as $data) {
        $date = convertDate($data[2]);
        $confirmed = $data[3];
        if(empty($confirmed)) {
            $confirmed = 0;
        }
        if ($counter == 0) {
            echo '{ x: ' . $date . ', y: ' . $confirmed . '}';
        } else {
            echo ',{ x: ' . $date . ', y: ' . $confirmed . '}';
        }
        $counter++;
    }
    echo ']
}, {        
type: "spline",
showInLegend: true,
xValueFormatString: "MMM D", 
name: "Deceased",
legendText: "Deceased",
dataPoints: [';
    $count2 = 0;
    foreach ($state as $data) {
        $date = convertDate($data[2]);
        $deaths = $data[4];
        if(empty($deaths)) {
            $deaths = 0;
        }
        if ($count2 == 0) {
            echo '{ x: ' . $date . ', y: ' . $deaths . '}';
        } else {
            echo ',{ x: ' . $date . ', y: ' . $deaths . '}';
        }
        $count2++;
    }
    echo ']
},
{        
type: "spline",
showInLegend: true,
xValueFormatString: "MMM D", 
name: "Recovered",
legendText: "Recovered",
dataPoints: [';
    $count4 = 0;
    foreach ($state as $data) {
        $date = convertDate($data[2]);
        $recovered = $data[5];
        if(empty($recovered)) {
            $recovered = 0;
        }
        if ($count4 == 0) {
            echo '{ x: ' . $date . ', y: ' . $recovered . '}';
        } else {
            echo ',{ x: ' . $date . ', y: ' . $recovered . '}';
        }
        $count4++;
    }
    echo ']
}]
});

chart.render();';
    $cnt2++;
}
echo '}</script>';
?>

<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
<div class="chartCompilation">
    <?php
    for ($count = 0; $count < 51; $count++) {
        echo '<div id="chartContainer-' . $count . '" style="height:300px; width:100%;"></div>';
    }
    ?>
</div>