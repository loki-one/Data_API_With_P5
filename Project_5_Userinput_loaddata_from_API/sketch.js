var weatherData;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=07ea240391c4833edb3abfade15c21a6';
var units = '&units=metric';
var input;
//Add the thrid parameter jsonp if you get cross acess origin error.
function setup() {
  createCanvas(200, 200);
  var button = select('#submit');
  button.mousePressed(weatherAsked);
  input = select('#city');
}

function weatherAsked() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data){
  weatherData = data;
}

function draw() {
  background(0);
  if(weatherData){
    var temp = weatherData.main.temp;
    fill(250,200,0);
    rect(90, 30, 90, 30);
    fill(250,0,200);
    text('Temp is: '+ temp, 100,50);
  }
}
