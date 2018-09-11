let populations;
let objArray = [];
let wid = window.innerWidth;
let hei = window.innerHeight;
let bouncers = [];
let gravity = 0.4;
let startTime = 0;
let countries = [];
let col = 0;
function preload() {
  // Don't use preload() function for JSON files,
  // currently a bug in p5 where it doesn't return JSON Arrays only JSON Objects
  // populations = loadJSON('../data/simpleData_noRegions.json');
}
function setup() {
  createCanvas(wid,hei);

  // put setup code here
  // load static data set here
  loadJSON('simpleData_noRegions.json', callback);
  // for (let i = 0; i < ; i++) {
  //   bouncers[i] = new Ball(random(width),random(30, 70));
  // }
}
function callback(data) {
  console.log('done loading data');
  console.log(data);
  populations = data;

  //if the data is loaded, start working with it
  if (populations) {
    for (let i = 0; i < populations.length; i++) {
      //console.log(populations[i]);

      let name = populations[i].country;
      countries.push(name);
      let population = populations[i].estimate;
      let popMap = map(population,0,2000000,0,200)
      //sampling error of the estimate, estimate could be + or - the margin of error
      let error = populations[i].marginOfError;

      //get magnitude of error compared to population estimate;
      let errorFraction =  populations[i].marginOfError / population;
      //console.log(errorFraction);
      let r = random(wid);
      bouncers[i] = new Ball(r,popMap);
      // console.log(name,  population, error)
    }
  }
}


let x = 0;

function draw() {
  // put drawing code here
  let currentTime = millis()-startTime;
  let currentSeconds = currentTime/1000;

  fill(col);
  // strokeWeight(4);
  textSize(30);
  text(countries[x],wid/4,100,);
  // console.log(currentSeconds);
  background(220,30);
  fill(0);
  if (frameCount % 30 == 0){

    if (x < bouncers.length){
      x++;

    }
  }
  // console.log(j);
  for (let i = 0; i < x; i++) {

        bouncers[i].move();
        bouncers[i].show();
        bouncers[i].color();

      }


  // if (populations) {
    // How might you sort the countries by population estimate?

    // How might you visually represent the population estimates?
    // Try a few different ways
    // Think about shape, color, text
    // Once you feel comfortable with drawing a static representation, think about adding interactivity

  // }
}
