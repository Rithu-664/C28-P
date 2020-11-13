
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stone,boy,tree,slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

  ground =  new Ground(600,380,1200,15);
  boy = new Boy(350,340,20,100);
    stone = new Stone(316,280,20);

    mango1 = new Mango(800,170,30);
    mango2 = new Mango(840,190,30);
    mango3 = new Mango(825,140,30);
    mango4 = new Mango(890,150,30);
    mango5 = new Mango(920,190,30);
    mango6 = new Mango(980,170,30);
    mango7 = new Mango(880,200,30);
    mango8 = new Mango(880,100,30);
    mango9 = new Mango(950,140,30);
    mango10 = new Mango(980,100,30);

    tree = new Tree(900,215,20,200);
    slingshot = new Slingshot(stone.body,{x:320,y:290});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  ground.display();
  boy.display();
  stone.display();
  slingshot.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  fill("blue")
  text(mouseX+" , "+mouseY,mouseX,mouseY);
  keyPressed();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);
  Engine.update(engine);
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:320,y:290})
    slingshot.attatch(stone.body);
    
  }
}

function detectcollision(stone,lmango){
  var distance=dist(stone.body.position.x,stone.body.position.y,lmango.body.position.x,lmango.body.position.y);
  if(distance<=lmango.r+stone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}