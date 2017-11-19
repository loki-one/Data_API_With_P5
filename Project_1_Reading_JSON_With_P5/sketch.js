var flower;

//loading JSON is preload because it loads it asynchronously and if we want
//all data to be available we load it in preload because this is the first
//function that is called.
function preload(){
  flower = loadJSON("flower.json");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(flower.r, flower.g, flower.b);
  text(flower.name, 10, 50);
}
