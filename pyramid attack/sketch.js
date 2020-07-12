const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var block8,block9,block10,block11,block12,block13,block14,block15,block16;

var ground1;

var sling1;

var hexagon1;
function setup() 
{
    createCanvas(1600,800);
    engine = Engine.create();
      world = engine.world;

  //Level two
  block8 = new Block(330, 235, 30, 40) ;
  block9 = new Block (360, 235, 30,40) ;
  block10 = new Block(390,235, 30, 40) ;

  block11 = new Block(420, 235, 30, 40) ;
  block12 = new Block(450, 235, 30,40) ;

  //level three
  block13 = new Block (360, 195, 30, 40) ;
  block14 = new Block( 390, 195, 30,40) ;
  block15 = new Block(420, 195, 30, 40) ;

  // top
  block16 = new Block( 390, 155, 30, 40);

  ground1 = new Ground(405, 280,170,10);

  hexagon1 = new hexagon(50,200,20)
 
  sling1 = new SlingShot(hexagon1.body,{x:200, y:100});
  Engine.run(engine);
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});  
  
}

function draw()
{
  background(255,255,255); 
  Engine.update(engine);
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   ground1.display();
   sling1.display();
hexagon1.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hexagon1.body,{x:mouseX,y:mouseY})
    
  }

  function mouseReleased() {
    sling1.fly();
  }
  function keyPressed(){
  if(keyCode === 32){
    sling1.attach(hexagon1.body)
  
  }}
