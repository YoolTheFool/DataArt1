let populations;
let objArray = [];
let wid = window.innerWidth;
let hei = window.innerHeight;
let startTime = 0;
let bugs = []; // array of Jitter objects
let col = 255;
let estimations = [];
let countries =[];
let ranEstimate;
let ranCountry;

// let r;

function preload() {
  // Don't use preload() function for JSON files,
  // currently a bug in p5 where it doesn't return JSON Arrays only JSON Objects
  // populations = loadJSON('../data/simpleData_noRegions.json');
}
function setup() {
  createCanvas(wid,hei);

  // put setup code here
  // load static data set here
  loadJSON('../simpleData_noRegions.json', callback);
  background(0);
  textSize(30);
  text('hello',wid/2-100,hei-hei/8);
  // Create objects
}
function callback(data) {
  // console.log('done loading data');
  // console.log(data);
  populations = data;

  //if the data is loaded, start working with it
  if (populations) {
    for (let i = 0; i < populations.length; i++) {
      //console.log(populations[i]);

      let name = populations[i].country;
      let population = populations[i].estimate;
      let popMap = map(population,0,100000,0,100)
      //sampling error of the estimate, estimate could be + or - the margin of error
      let error = populations[i].marginOfError;

      //get magnitude of error compared to population estimate;
      let errorFraction =  populations[i].marginOfError / population;
      //console.log(errorFraction);
      // bouncers[i] = new Ball(random(wid),popMap);
      // console.log(name,  population, error)
      estimations.push(popMap);
      countries.push(name);
    }
    let r = Math.floor(Math.random() * estimations.length);
    let ranCountry = countries[r];
    let ranEstimate = Math.floor(estimations[r]);
    console.log(ranEstimate);
    console.log(ranCountry);
    let text = document.createElement('p');
          // text.id = "order+"+i;
          text.className = "visualText";
          //text.position = 200;
          text.innerHTML = countries[r];
          document.body.appendChild(text);
          // text.position(wid/2,hei-hei/8);

    for (var i=0; i<ranEstimate; i++) {
      bugs.push(new Jitter());
    }
    // ranEstimate = estimations.random();
  }
}



function draw() {
  // if (frameCount % 300 ==0){
  // 	col = 0;
  // }
  fill(col);


  for (var j=0; j<bugs.length; j++) {

    bugs[j].move();
    bugs[j].display();
  }

}
// function Jitter() {
//   this.x = wid/2;
//   this.y = 0;
//   this.diameter = 3;
//   this.speedx = random(-5,5);
//   this.speedy = random(8);
// 	this.a = 255;
//
//   this.move = function() {
//     this.x += random(0.5*this.speedx,2*this.speedx);
//     this.y += random(0.2*this.speedy,1.2*this.speedy);
//     this.speedx = 0.999*this.speedx;
//     this.speedy = 0.999*this.speedy;
//
//
//   };
//
//   this.display = function() {
//     noStroke();
//   //    if (frameCount % 300 ==0){
//   // 	col = 0;
//   // }
//   this.a -= 2;
//   fill(col,this.a);
//     ellipse(this.x, this.y, this.diameter, this.diameter);
//   };
//
//
// }
