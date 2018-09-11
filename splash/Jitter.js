class Jitter {

  constructor(){
  this.x = window.innerWidth/2;
  this.y = 0;
  this.diameter = 3;
  this.speedx = random(-5,5);
  this.speedy = random(8);
	this.a = 255;
}
  move() {
    this.x += random(0.5*this.speedx,2*this.speedx);
    this.y += random(0.2*this.speedy,1.2*this.speedy);
    this.speedx = 0.999*this.speedx;
    this.speedy = 0.999*this.speedy;


  };

  display() {
    noStroke();
  //    if (frameCount % 300 ==0){
  // 	col = 0;
  // }
  this.a -= 2;
  fill(col,this.a);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };


}
