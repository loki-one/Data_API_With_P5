var data;

//loading JSON is preload because it loads it asynchronously and if we want
//all data to be available we load it in preload because this is the first
//function that is called.
function preload(){
  data = loadJSON("birds.json");
}

function setup() {
  //createCanvas(400,400);
  var birds = data.birds;

  for (var i = 0; i < birds.length; i++) {
    createElement('h1', birds[i].family);
    var members = birds[i].members;
    for(var j = 0; j < members.length; j++) {
      createDiv(members[j]);
    }
  }
}
