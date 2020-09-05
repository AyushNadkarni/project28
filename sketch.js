
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bin,bin1,bin2,ball,ground,launch;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bin = new Dustbin(600,640,200,10);
	bin.shapeColor = color(255,0,0);


	bin1 = createSprite(500,555,10,200);
	bin1.shapeColor = color(255,0,0);

	bin2 = createSprite(700,555,10,200);
	bin2.shapeColor = color(255,0,0);

	ball = new Paper(500,500,{restitution:2.0});

	launch = new Launcher(ball.body,{x:200, y:200});
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true,restitution:1.0} );
	 World.add(world, ground);
	 
	  ball_options ={
		restitution:1.0
	 }


	Engine.run(engine);
}
  
function draw() {
  background("grey");
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,width,10);

  ball.display();
bin.display();
bin1.display();
bin2.display();
launch.display();



}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    launch.fly();
    gameState = "launched";
}
