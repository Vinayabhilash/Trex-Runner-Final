const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = "onSling";
var sling1, sling2;

function preload() {
    getTime();
    sling1 = loadImage("sprites/sling1.png")
    sling2 = loadImage("sprites/sling2.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create()    ;
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(210,25);

    log6 = new Log(230,180,80, PI/2);

    slingShot = new Slingshot(bird.body,{x:210, y:25});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    image(sling1, 200, 20)
    bird.display();
    platform.display();
    image(sling2, 175, 20)

    if(bird.body.position.x < 200 && bird.body.position.y > 50){
    //slingShot.display();
    }
 
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
slingShot.attach(bird.body);
Matter.Body.setPosition(bird.body, {x: 200, y: 50});
bird.trajectory = [];
    }
}

async function getTime(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
console.log(response);

var responseJSON = await response.json();
console.log(responseJSON);

var DateTime = responseJSON.datetime;
console.log(DateTime);

var Time = DateTime.slice(11, 13);
console.log(Time);

if(Time >= 06 && Time <= 19){
bg = "sprites/bg.png"
}else{
    bg = "sprites/bg2.jpg";
}
backgroundImg = loadImage(bg);
}