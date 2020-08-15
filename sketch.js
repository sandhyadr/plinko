
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var plinkos=[]
var divisions =[]
var particles =[]
var engine,world;
var ground,divisionHeight =300;

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
engine =Engine.create();
world=engine.world;
ground = new Ground(400,770,800,30);


for (var i = 0; i <=400; i= i + 80) {
  divisions.push(new Ground(i, 610, 10, divisionHeight));
}

for (var j = 75; j <=600; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=600; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=600; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=600; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("lightblue"); 
  Engine.update(engine);

  // to display the lines in between
  for (var i = 0; i < divisions.length; i++) {
     fill("green");
    divisions[i].display();
  }
// to display the circular balls in rows
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  
  if(frameCount % 90===0){
    particles.push(new Particle(random(50,550), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }


  ground.display();

  drawSprites();
}