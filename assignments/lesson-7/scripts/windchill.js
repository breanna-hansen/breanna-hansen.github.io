function calculateWindChill()
{
  let highT = parseFloat(document.getElementById('high').innerHTML);
  let lowT = parseFloat(document.getElementById('low').innerHTML);
  let speed = parseFloat(document.getElementById('windspeed').innerHTML);
  let result = "Please enter a wind speed greater then 0 miles per hour";

  if (speed > 0)
  {
    result = windChill(highT, lowT, speed);
  }
  return result;
}

function windChill(highT, lowT, speed)
{
  let avg = average(highT, lowT);
  let windChillResult = 35.74 + 0.6215 * avg - 35.75 * Math.pow(speed, 0.16) + 0.4275 * avg * Math.pow(speed, 0.16);
  let result = Math.round(windChillResult);
  return result;
}

function average (highT, lowT)
{
  let avg = (highT + lowT) / 2;
  return avg;
}

document.getElementById('windchill').innerHTML = calculateWindChill();
