const Engine = Matter.Engine;
  const  World = Matter.World;
   const Events = Matter.Events;
   const Bodies = Matter.Bodies;

   var world,umbrella;
   var maxDrops = 100;
   var drops = [];
   var  thunder,thunder1,thunder2,thunder3,thunder4;
   var thunderCreatedFrame = 0;

function preload(){
  thunders1 = loadImage("thunder1.png");
  thunders2 = loadImage("thunder2.png");
  thunders3 = loadImage("thunder3.png");
  thunders4 = loadImage("thunder4.png");
}

function setup(){

  engine = Engine.create();
    world = engine.world;
    var thunderCreatedFrame = 0;
    var canvas = createCanvas(1200,400); 
  
umbrella = new Umbrella(200,200);

 if(frameCount%150 === 0){   
for(var i=0; i<maxDrops; i++){
    drops.push(new Drop(random(0,400),random(0,400)))
}
 }
}

function draw(){
  Engine.update(engine);
  background("black");
    umbrella.display();

    for(var i=0; i<maxDrops; i++){
     drops[i].showDrop();
     drops[i].updateY();
  }
  
  var rand = Math.round(random(1,4));
  if(frameCount%150 == 0){
thunderCreatedFrame = frameCount;
thunder = createSprite(random(10,370),random(10,30),10,10);
switch(rand){
   case 1: thunder.addImage(thunders1); 
   break;
    case 2: thunder.addImage(thunders2);
     break;
      case 3: thunder.addImage(thunders3); 
      break;
       case 4: thunder.addImage(thunders4);
        break; 
        default: break;
       } 
       thunder.scale = random(0.3,0.6)
       } 
       if(thunderCreatedFrame + 10 ===frameCount && thunder)
{
   thunder.destroy();
   }
   drawSprites();
  }
 

