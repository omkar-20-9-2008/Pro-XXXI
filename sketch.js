const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//For Set up
var wall1,wall2,wall4;
var ground;
var d1,d2,d3,d4,d5,d6,d7;


function setup() {
	createCanvas(480, 800);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	wall1 = new Background(0,400,5,800);
	wall2 = new Background(480,400,5,800);

	wall4 = new Background(240,800,800,5);

	
	d1 = new Ground(8,680,10,260);
	d2 = new Ground(85.3,680,10,260);
	d3 = new Ground(162.6,680,10,260);
	d4 = new Ground(240,680,10,260);
	d5 = new Ground(317.3,680,10,260);
	d6 = new Ground(394.6,680,10,260);
	d7 = new Ground(472,680,10,260);

	ground = new Ground(240,790,480,10);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  ground.display();


  wall1.display();
  wall2.display();
  wall4.display();
  drawSprites();
 
}

