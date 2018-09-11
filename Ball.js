class Ball{


  constructor(x,d) {
	this.x=x;
  this.y=random(0,50);
  this.speed=0;
  this.fill = 0;
	this.d = d;
	}
	move(){
  this.y = this.y + this.speed;
  this.speed = this.speed + gravity;
   if (this.y > height) {
     this.y = height;
     this.speed = -0.70*this.speed;
   }
}


	show(){
  //background(255);
  noStroke();
  fill(this.fill,50);
  ellipse(this.x,this.y,this.d);
  }

  color(){
  if (this.speed<0){
  this.fill = random(255);
  } else {
  this.fill=0
  }
  }
}
