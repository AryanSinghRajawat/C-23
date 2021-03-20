 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 var engine;
 var world;
 var ground;
 var ball;
 function setup() {
 var canvas= createCanvas(400,400);
  engine = Engine.create();
  world  = engine.world;
  var student = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,200,50,student);
  World.add(world,ground);
  //console.log(bodies)
  //console.log(bodies.position.x)
  //console.log(bodies.position.y)
  var balloption = {
   restitution: 1.0
  }
  ball = Bodies.circle(200,100,20,balloption);
  World.add(world,ball);
}

function draw() {
  background(0);  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}