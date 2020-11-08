const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;


var divisions = [];
var plinkos = [];
var particles = [];
var divisionheight = 300;


function setup(){
  createCanvas(500,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(250,600,500,30);

for (var k = 0; k <= width; k = k+60) {
  divisions.push(new Division(k, height-divisionheight/2, 10, divisionheight));
}

for (var a =20; a <=width-10; a = a+50){
  plinkos.push(new Plinko(a,100));
}

for (var c =0; c <=width; c = c+50){
  plinkos.push(new Plinko(c,40));
}

for (var d =30; d <=width; d = d+50){
  plinkos.push(new Plinko(d,160));
}

for (var j =40; j <=width; j = j+50){
  plinkos.push(new Plinko(j,220));
}
}

function draw(){
  background ("black");

  ground.display();

for (var m = 0; m<divisions.length; m++ ){
divisions[m].display();
}

for (var b = 0; b<plinkos.length; b++){
plinkos[b].display();
}

if (frameCount%60 === 0){
  particles.push(new Particle(random (width/2-30,width/2+30),10));
}

for (var l = 0; l<particles.length; l++){
  particles[l].display();
  }
}