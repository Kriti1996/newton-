
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Constraint = Matter.Constraint;

var bg;

function preload() {
  bg = loadImage("bg.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  engine = Engine.create();
  world = engine.world;

  bob1 = new Bob(width / 2 - 100, height / 2 + 200, 50);
  bob2 = new Bob(width / 2 - 50, height / 2 + 200, 50);
  bob3 = new Bob(width / 2, height / 2 + 200, 50);
  bob4 = new Bob(width / 2 + 50, height / 2 + 200, 50);
  bob5 = new Bob(width / 2 + 100, height / 2 + 200, 50);
  bob6 = new Bob(width / 2 - 100, height / 2 + 200, 50);
  bob7 = new Bob(width / 2 + 100, height / 2 + 200, 50);

  ground1 = new Roof(width / 2 - 150, 0, 50, 40);
  ground6 = new Roof(width / 2 - 100, 0, 50, 40);
  ground2 = new Roof(width / 2 - 50, 0, 50, 40);
  ground3 = new Roof(width / 2, 0, 50, 40);
  ground4 = new Roof(width / 2 + 50, 0, 50, 40);
  ground5 = new Roof(width / 2 + 100, 0, 50, 40);
  ground7 = new Roof(width / 2 + 150, 0, 50, 40);
  ground8 = new Roof(width / 2 , 0, width, 40);

  sling1 = new Suspender(bob1.body, ground1.body);
  sling2 = new Suspender(bob2.body, ground2.body);
  sling3 = new Suspender(bob3.body, ground3.body);
  sling4 = new Suspender(bob4.body, ground4.body);
  sling5 = new Suspender(bob5.body, ground5.body);
  sling6 = new Suspender(bob6.body, ground6.body);
  sling7 = new Suspender(bob7.body, ground7.body);

  Engine.run(engine);

}


function draw() {
  background(bg);

  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  sling6.display();
  sling7.display();
 

  keyPressed();
  drawSprites();

  textFont("Bodoni");
  textSize(30);
  fill("white");
  strokeWeight(1);
  stroke("black");
  text("PRESS 'UP' KEY TO START THE NEWTONS CRADLE",width/2-350,height-20)
}

function keyPressed() {
  if (keyDown(UP_ARROW)) { Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -100, y: 50 }); }
}




