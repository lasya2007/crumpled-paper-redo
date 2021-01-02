
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var side1,side2,base;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,650);

	side1=new Bin(580,600,PI);
	side2=new Bin(680,600,PI);
	base=new Bin(630,650,PI/2);
	//Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  
  rectMode(CENTER);
  background(0);
  
  ground.display();
  
  side1.display();
  side2.display();
  base.display();
  
  //drawSprites();
 
}



