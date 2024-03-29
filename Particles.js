class Particles {
    constructor(x,y,radius) {
      var options = {
          restitution:0.4
      }
      this.body = Bodies.circle(x,y,this.radius,options);
      this.color = color(random(0,255),random(0,255),random(0,255));
      this.radius = radius
      World.add(world, this.body);
    }

display() {
    this.pos = this.body.position;
    this.angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //imageMode(CENTER);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius, this.radius);
    pop();

}


}

