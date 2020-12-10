const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15;
var box16;
var rock;

function setup(){
    createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(900,270,400,10);
    rock = new Rock(200,200,50,50);
    //level one (ground1)
    box1 = new Box(805,260,30,40);
    box2 = new Box(835,260,30,40);
    box3 = new Box(865,260,30,40);
    box4 = new Box(895,260,30,40);
    box5 = new Box(925,260,30,40);
    box6 = new Box(955,260,30,40);
    box7 = new Box(985,260,30,40); 
    //level two (ground1)
    box8 = new Box(835,250,30,40);
    box9 = new Box(865,250,30,40);
    box10 = new Box(895,250,30,40);
    box11 = new Box(925,250,30,40);
    box12 = new Box(955,250,30,40);
    //level three (ground1)
    box13 = new Box(865,240,30,40);
    box14 = new Box(895,240,30,40);
    box15 = new Box(925,240,30,40);
    //level four (ground1)
    box16 = new Box(895,225,30,40);
                                                                                                                                  
}

function draw(){
    background("sprites/Background.jpg");
    Engine.update(engine);

    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    rock.display();
}
