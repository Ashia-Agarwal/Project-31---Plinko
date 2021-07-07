const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480, 700);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(width/2, height-15, width, 30, "white");
  for(var k = 0;k <= width;k += 80) {
    divisions.push(new Ground(k, height-150, 10, 300, "white"));
  }
  for(var i = 15;i <= width;i += 50) {
    for(var j = 20; j <= 270; j += 50) {
      plinkos.push(new Plinko(i, j));
    }
  }
  Engine.run(engine);
}

function draw() {
  background(0);
  ground.display();
  Particles();
  for(var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  for(var i = 0; i < particles.length; i++) {
    particles[i].display();
  }
  for(var i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }
}

function Particles() {
  if(frameCount % 90 === 0) {
    particles.push(new Particle(random(width/2 - 50, width/2 + 50), 10));
  }
}