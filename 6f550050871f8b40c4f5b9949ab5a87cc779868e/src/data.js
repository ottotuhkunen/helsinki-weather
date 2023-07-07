function loadFMI() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        setData(this);
      }
    };
    //AIRPORT SPECIFIC
    xhttp.open("GET", "https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::simple&fmisid=100968", true); 
    xhttp.send();
    fetchInformation();
    setTimeout(loadFMI, 60000);
}

function loadMetar() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      setMetarData(this);
    }
  };
  //AIRPORT SPECIFIC
  xhttp.open("GET", "https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::avi::observations::iwxxm&icaocode=EFHK", true); 
  xhttp.send();
}

function setData(xml) {
    var xmlDoc = xml.responseXML;

    var xmlSize = xmlDoc.getElementsByTagName("BsWfs:ParameterName");
    var table = new Array(xmlSize.length);

    for(var i = 0; i < xmlSize.length; i++) {
        table[i] = new Array(2);
        table[i][0] = xmlDoc.getElementsByTagName("BsWfs:ParameterName")[i].childNodes[0].nodeValue;
        table[i][1] = xmlDoc.getElementsByTagName("BsWfs:ParameterValue")[i].childNodes[0].nodeValue;
    }

    table = table.slice(-15, -1);

    var qnh = 0;
    var windSpeed = 0;
    var windDirection = 0;
    var windGust = 0;

    for (var i = 0; i < table.length; i++) {
        if (table[i][0] === "p_sea") {
          qnh = table[i][1];
        }
        if (table[i][0] === "ws_10min") {
          windSpeed = table[i][1];
        }
        if (table[i][0] === "wd_10min") {
          windDirection = table[i][1];
        }
        if (table[i][0] === "wg_10min") {
          windGust = table[i][1];
        }
    }

    if (sessionStorage.getItem('efhkQnh') === null){
      sessionStorage.efhkQnh = JSON.stringify(1);
    }

    var qnhChanger = JSON.parse(sessionStorage.efhkQnh);
    var roundedQnh = Math.floor(qnh);
    var roundedGust = Math.ceil(windGust * 1.943);
    var maxGust = roundedGust + 3;
    var roundedWindSpeed = Math.round(windSpeed * 1.943);

    setTrl(roundedQnh);

    if (roundedQnh != qnhChanger){
      sessionStorage.efhkQnh = JSON.stringify(roundedQnh);
      document.getElementById('qnh').style.backgroundColor = "black";
      document.getElementById('qnh').style.color = "white";
    }

    document.getElementById("qnh").innerHTML = roundedQnh;
    document.getElementById("qfe").innerHTML = Math.floor(qnh - 6);
    document.getElementById("22R_windDir").innerHTML = randomWindDirection(windDirection, "arrow22R", "22R_maxDir", roundedWindSpeed);
    document.getElementById("22L_windDir").innerHTML = randomWindDirection(windDirection, "arrow22L", "22L_maxDir", roundedWindSpeed);
    document.getElementById("15_windDir").innerHTML = randomWindDirection(windDirection, "arrow15", "15_maxDir", roundedWindSpeed);
    document.getElementById("33_windDir").innerHTML = randomWindDirection(windDirection, "arrow33", "33_maxDir", roundedWindSpeed);
    document.getElementById("04L_windDir").innerHTML = randomWindDirection(windDirection, "arrow04L", "04L_maxDir", roundedWindSpeed);
    document.getElementById("04R_windDir").innerHTML = randomWindDirection(windDirection, "arrow04R", "04R_maxDir", roundedWindSpeed);

    //WIND CALM
    if (roundedWindSpeed < 1) {
      document.getElementById("22R_windDir").style.display = "none";
      document.getElementById("22R_maxDir").style.display = "none";
      document.getElementById("22R_windSpd").innerHTML = "CALM";

      document.getElementById("22L_windDir").style.display = "none";
      document.getElementById("22L_maxDir").style.display = "none";
      document.getElementById("22L_windSpd").innerHTML = "CALM";

      document.getElementById("15_windDir").style.display = "none";
      document.getElementById("15_maxDir").style.display = "none";
      document.getElementById("15_windSpd").innerHTML = "CALM";

      document.getElementById("33_windDir").style.display = "none";
      document.getElementById("33_maxDir").style.display = "none";
      document.getElementById("33_windSpd").innerHTML = "CALM";

      document.getElementById("04R_windDir").style.display = "none";
      document.getElementById("04R_maxDir").style.display = "none";
      document.getElementById("04R_windSpd").innerHTML = "CALM";

      document.getElementById("04L_windDir").style.display = "none";
      document.getElementById("04L_maxDir").style.display = "none";
      document.getElementById("04L_windSpd").innerHTML = "CALM";
    }
    else {
      document.getElementById("22R_windSpd").innerHTML = roundedWindSpeed;
      document.getElementById("22L_windSpd").innerHTML = roundedWindSpeed;
      document.getElementById("15_windSpd").innerHTML = roundedWindSpeed;
      document.getElementById("33_windSpd").innerHTML = roundedWindSpeed;
      document.getElementById("04R_windSpd").innerHTML = roundedWindSpeed;
      document.getElementById("04L_windSpd").innerHTML = roundedWindSpeed;

      document.getElementById("22R_windDir").style.display = "block";
      document.getElementById("22R_maxDir").style.display = "block";

      document.getElementById("22L_windDir").style.display = "block";
      document.getElementById("22L_maxDir").style.display = "block";

      document.getElementById("15_windDir").style.display = "block";
      document.getElementById("15_maxDir").style.display = "block";

      document.getElementById("33_windDir").style.display = "block";
      document.getElementById("33_maxDir").style.display = "block";

      document.getElementById("04R_windDir").style.display = "block";
      document.getElementById("04R_maxDir").style.display = "block";

      document.getElementById("04L_windDir").style.display = "block";
      document.getElementById("04L_maxDir").style.display = "block";
    }

    document.getElementById("22R_maxSpd").innerHTML = getMaxSpeed(roundedGust, roundedWindSpeed, "display22R", "22R_maxSpd", "22R_minSpd");
    document.getElementById("22L_maxSpd").innerHTML = getMaxSpeed(roundedGust, roundedWindSpeed, "display22L", "22L_maxSpd", "22L_minSpd");
    document.getElementById("15_maxSpd").innerHTML = getMaxSpeed(roundedGust, roundedWindSpeed, "display15", "15_maxSpd", "15_minSpd");
    document.getElementById("33_maxSpd").innerHTML = getMaxSpeed(roundedGust, roundedWindSpeed, "display33", "33_maxSpd", "33_minSpd");
    document.getElementById("04L_maxSpd").innerHTML = getMaxSpeed(roundedGust, roundedWindSpeed, "display04L", "04L_maxSpd", "04L_minSpd");
    document.getElementById("04R_maxSpd").innerHTML = getMaxSpeed(roundedGust, roundedWindSpeed, "display04R", "04R_maxSpd", "04R_minSpd");

    document.getElementById("22R_minSpd").innerHTML = getMinSpeed(roundedWindSpeed);
    document.getElementById("22L_minSpd").innerHTML = getMinSpeed(roundedWindSpeed);
    document.getElementById("15_minSpd").innerHTML = getMinSpeed(roundedWindSpeed);
    document.getElementById("33_minSpd").innerHTML = getMinSpeed(roundedWindSpeed);
    document.getElementById("04R_minSpd").innerHTML = getMinSpeed(roundedWindSpeed);
    document.getElementById("04L_minSpd").innerHTML = getMinSpeed(roundedWindSpeed);

    loadMetar();
}

function setTrl(qnh) {
  var trl = 0;
  if (qnh >= 943 && qnh <= 959){
    trl = 80;     
  }
  else if (qnh >= 960 && qnh <= 977){
    trl = 75;
  }
  else if (qnh >= 978 && qnh <= 995){
    trl = 70;
  }
  else if (qnh >= 996 && qnh <= 1013){
    trl = 65;
  }
  else if (qnh >= 1014 && qnh <= 1031){
    trl = 60;
  }
  else if (qnh >= 1032 && qnh <= 1050){
    trl = 55;
  }
  else if (qnh >= 1051 && qnh <= 1068){
    trl = 50;
  }
  document.getElementById("trl").innerHTML = trl;
}

function getMinSpeed(roundedWindSpeed) {
  var minimumSpeed = Math.floor(Math.random() * ((roundedWindSpeed - 2) - (roundedWindSpeed - 5)) + (roundedWindSpeed - 5));
  if (minimumSpeed < 0) {
    minimumSpeed = 0;
  }
  return minimumSpeed;
}

function getMaxSpeed(roundedGust, roundedWindSpeed, display, font1, font2) {
  var maxGust = roundedGust + 3;
  var maxSpeed = Math.floor(Math.random() * (maxGust - roundedGust) + roundedGust);

  console.log(maxSpeed);
  console.log(roundedWindSpeed);

  if (maxSpeed >= (roundedWindSpeed + 9)) {
    if (document.getElementById(display).style.fill == "white") {
      document.getElementById(font1).style.fill = "black";
      document.getElementById(font2).style.fill = "black";
    }
  }
  return maxSpeed;
}

function randomWindDirection(realDirection, arrowID, maxDirID, windSpeed) {
  var min = (realDirection - 10);
  var max = (realDirection + 10);
  var randomDirection = Math.floor(Math.random() * (max - min) + min);

  randomDirection = Math.round(randomDirection / 10) * 10;
  randomDirection = ((randomDirection % 360) + 360) % 360;

  var minimumRandomDirection = (randomDirection - 20);
  var maximumRandomDirection = (randomDirection + 20);

  minimumRandomDirection = ((minimumRandomDirection % 360) + 360) % 360;
  maximumRandomDirection = ((maximumRandomDirection % 360) + 360) % 360;

  windComponentCalculator(windSpeed, randomDirection, arrowID);

  if (randomDirection == 0) {
    randomDirection = 360;
  }
  if (randomDirection < 100) {
    randomDirection = "0" + randomDirection;
  }
  if (minimumRandomDirection == 0) {
    minimumRandomDirection = 360;
  }
  if (minimumRandomDirection < 100) {
    minimumRandomDirection = "0" + minimumRandomDirection;
  }
  if (maximumRandomDirection == 0) {
    maximumRandomDirection = 360;
  }
  if (maximumRandomDirection < 100) {
    maximumRandomDirection = "0" + maximumRandomDirection;
  }
  document.getElementById(arrowID).style.transform = `rotate(${(randomDirection + 180)}deg)`;
  document.getElementById(maxDirID).innerHTML = minimumRandomDirection + "-" + maximumRandomDirection;
  return randomDirection;
}

function setMetarData(xml) {
  var xmlDoc = xml.responseXML;
  
  var vrbWindcheck = xmlDoc.getElementsByTagName("iwxxm:extremeCounterClockwiseWindDirection").length;

  var metars = xmlDoc.getElementsByTagName('avi:input');
  var metar = metars[metars.length-1].childNodes[0].nodeValue;
  document.getElementById("metar").innerHTML = metar;

  //VARIABLE BETWEEN
  if (vrbWindcheck > 0) {
    var counterClockwises = xmlDoc.getElementsByTagName("iwxxm:extremeCounterClockwiseWindDirection");
    var clockwises = xmlDoc.getElementsByTagName("iwxxm:extremeClockwiseWindDirection");

    var counterClockwise = counterClockwises[counterClockwises.length-1].childNodes[0].nodeValue;
    var clockwise = clockwises[clockwises.length-1].childNodes[0].nodeValue;

    counterClockwise = Math.round(counterClockwise);
    clockwise = Math.round(clockwise)

    document.getElementById("22R_maxDir").innerHTML = counterClockwise + "-" + clockwise;
    document.getElementById("22L_maxDir").innerHTML = counterClockwise + "-" + clockwise;
    document.getElementById("15_maxDir").innerHTML = counterClockwise + "-" + clockwise;
    document.getElementById("33_maxDir").innerHTML = counterClockwise + "-" + clockwise;
    document.getElementById("04R_maxDir").innerHTML = counterClockwise + "-" + clockwise;
    document.getElementById("04L_maxDir").innerHTML = counterClockwise + "-" + clockwise;
  }

  //IF METAR CONTAINS VRB
  if (metar.includes("VRB")) {
    document.getElementById("22R_windDir").innerHTML = "VRB";
    document.getElementById("22L_windDir").innerHTML = "VRB";
    document.getElementById("15_windDir").innerHTML = "VRB";
    document.getElementById("33_windDir").innerHTML = "VRB";
    document.getElementById("04R_windDir").innerHTML = "VRB";
    document.getElementById("04L_windDir").innerHTML = "VRB";

    document.getElementById("22R_maxDir").style.display = "none";
    document.getElementById("22L_maxDir").style.display = "none";
    document.getElementById("15_maxDir").style.display = "none";
    document.getElementById("33_maxDir").style.display = "none";
    document.getElementById("04L_maxDir").style.display = "none";
    document.getElementById("04R_maxDir").style.display = "none";
  }

  var viss = xmlDoc.getElementsByTagName("iwxxm:prevailingVisibility");
  var vis = viss[viss.length-1].childNodes[0].nodeValue;

  //IMC VMC INDICATOR
  if (vis < 5000 && vis > 10 || metar.match(/\W*(BKN00)/g) || metar.match(/\W*(OVC00)/g) || metar.includes(" VV")){
    document.getElementById("imcVmc").innerHTML = "IMC";
  }
  else {
    document.getElementById("imcVmc").innerHTML = "VMC";
  }

}

function qnhClick() {
  document.getElementById('qnh').style.backgroundColor = "white";
  document.getElementById('qnh').style.color = "black";
}