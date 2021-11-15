var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada,fadaImg,fadaAni,fadaBody;

var music

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var tela

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada
    fadaImg = loadImage("images/fairy.png") 

    music = loadSound("sound/JoyMusic.mp3")

    fadaAni = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")

}

function setup() {
    createCanvas(800, 750);

    engine = Engine.create();
    world = engine.world;

    //escrever código para tocar o som vozFada
    music.play();
 
    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(100,480)
    fada.addAnimation("fadinha",fadaAni)
    fada.scale = 0.35;
    

    star = createSprite(650,30);
	star.addImage("estrela",starImg);
	star.scale = 0.2;
    

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world,starBody);

	Engine.run(engine);

}
function draw(){

    background(bgImg)
    //Engine.update(engine);

    star.x = starBody.position.x
    star.y = starBody.position.y

    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true)
    }

  drawSprites();
 
}

function keyPressed(){

    //Para mover e alterar a animação, escreva o código aqui
if(keyCode === LEFT_ARROW){
    fada.x = fada.x - 100;
  
}
       
if(keyCode === RIGHT_ARROW){
    fada.x = fada.x + 100;
}

if(keyCode === DOWN_ARROW){
Matter.Body.setStatic(starBody,false)

}
}
  