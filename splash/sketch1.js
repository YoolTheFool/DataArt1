var bugs = []; // array of Jitter objects
var col = 255;
function setup() {
  createCanvas(710, 400);
  background(0);

  // Create objects
  for (var i=0; i<100; i++) {
    bugs.push(new Jitter());
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
function Jitter() {
  this.x = width/2;
  this.y = 0;
  this.diameter = 10;
  this.speedx = random(-5,5);
  this.speedy = random(8);
	this.a = 255;
	
  this.move = function() {   
    this.x += random(0.5*this.speedx,2*this.speedx);
    this.y += random(0.2*this.speedy,1.2*this.speedy);
    this.speedx = 0.999*this.speedx;
    this.speedy = 0.999*this.speedy;

    
  };

  this.display = function() {
    noStroke();
  //    if (frameCount % 300 ==0){
  // 	col = 0;
  // } 
  this.a -= 2;
  fill(col,this.a);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };

  
}