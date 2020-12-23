
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
var ball1,rope1,engine,world

function setup() {
	createCanvas(600,600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof=new Ground(200,200,300,20);

	ball1 = new ball(200,500,20,20);
	rope1 = new SlingShot(ball1.body,{x:200,y:200});

	ball2 = new ball(160,500,20,20);
	rope2 = new SlingShot(ball2.body,{x:160,y:200});

	ball3 = new ball(240,500,20,20);
	rope3 = new SlingShot(ball3.body,{x:240,y:200});
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();

  rope1.display()
 ball1.display();
 rope2.display()
 ball2.display();
 rope3.display()
 ball3.display();
 
}

/*function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball2.body,ball2.body.position,{x:-20,y:-25});

  	}
}*/
function mouseDragged(){
	Matter.Body.setPosition(ball2.body,{x:mouseX,y:mouseY});
}







