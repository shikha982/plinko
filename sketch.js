const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var d_height=300;

var particles=[];
var plinkos=[];
var divisions=[];

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);

  ground=new Ground(240,790,480,20);

  for(var k=0;k<=width;k+=80){
    divisions.push(new Divisions(k,height-d_height/2,10,d_height));
 }

  for(j=75;j<=width;j+=50){
    plinkos.push(new Plinko(j,75));
 }

  for(j=50;j<=width;j+=50){
    plinkos.push(new Plinko(j,175));
 }
  
  for(j=75;j<=width;j+=50){
   plinkos.push(new Plinko(j,275));
}

  for(j=50;j<=width;j+=50){
   plinkos.push(new Plinko(j,375));
}
}

function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();
  
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  drawSprites();
}

