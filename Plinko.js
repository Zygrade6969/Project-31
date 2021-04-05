class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,this.radius,options);
      this.color = color(random(0,255),random(0,255),random(0,255));
      this.radius = radius
      World.add(world, this.body);
    }
}