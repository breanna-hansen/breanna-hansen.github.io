function calculateWindchill()
{
  let highT = parseFloat(document.getElementById('high').innerHTML);
  let lowT = parseFloat(document.getElementById('low').innerHTML);
  let speed = parseFloat(document.getElementById('windspeed').innerHTML);
  let result = "Please enter a wind speed greater then 0 miles per hour";

  if (speed > 0)
  {
    result = windChill(tempF, speed).toFixed(2);
  }

  document.getElementById('windchill').innerHTML = "Windchill: " + result;
}

function windChill(tempF, speed)
{
  let avg = average(high, low);
  let windChillResult = 35.74 + 0.6215 * tempF - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
  return windChillResult;
}

function average (high, low)
{
  let avg = (high + low) / 2;
  return avg;
}
