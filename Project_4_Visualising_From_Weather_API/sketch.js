var weatherData;
var url = 'http://api.openweathermap.org/data/2.5/weather?q=neulussheim&appid=07ea240391c4833edb3abfade15c21a6&units=metric';
//Add the thrid parameter jsonp if you get cross acess origin error.
function setup() {
  createCanvas(200, 200);
  loadJSON(url, gotData);
}

function gotData(data){
  weatherData = data;
  console.log(data);
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
