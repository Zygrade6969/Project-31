const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles,plinko,divisions,ground

var particles;
var plinko;
var divisions;

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(600,800);

  engine = Engine.create();
    world = engine.world;

  ground = new Ground(300,790,600,20);

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <=width; j = j - 10){
    plinkos.push(new Plinko(j,75))
  }

  for(var j = 15; j <=width; j = j+50){
   plinkos.push(new Plinko(j,175))
  }
}

function draw() {
  Engine.update(engine);

  background(0,0,0);  

  ground.display();

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    divisions[j].display();
  }
 

}