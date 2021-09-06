var bulletsGroup
var EnemiesGroup
var planetGroup
var planetGroup1
var planetGroup2
var starGroup


function preload(){
  space_ship = loadImage("spacecraft.png");
  Enemies_attack = loadImage("alien15.png");
  planet_img = loadImage("moon.png");
  planet1_img = loadImage("mercury.png");
  planet2_img = loadImage("jupiter.png");
  star_img = loadImage("star.png");
  
  
  
}

function setup() {
  createCanvas(800,500);
  mainship = createSprite(400,400,60,5);
  mainship.addImage(space_ship);
  mainship.scale = 0.2
  
  
  bulletsGroup = new Group();
  EnemiesGroup = new Group();
  planetGroup = new Group();
  planetGroup1 = new Group();
  planetGroup2 = new Group();
  starGroup = new Group();
  


  
  
 

  
}


function draw() {
  background(0);
  drawSprites();
  spawnPlanet();
  spawnPlanet1();
  spawnPlanet2();
  edges=createEdgeSprites();
  spawnEnemies();

  if (keyDown("space")) {
    createArrow();
    
  }

  //moving bord with keys
  if (keyDown("right")){
    mainship.x = mainship.x+10;
    }
    if (keyDown("left")){
      mainship.x = mainship.x-10;
    }

    if (bulletsGroup.isTouching(EnemiesGroup)){
      bulletsGroup.destroyEach();
      EnemiesGroup.destroyEach();
    }
}

// Creating  arrows for bow
function createArrow() {
  var bullets= createSprite(230,380,5,40);
  bullets.shapeColor = "yellow"
  bullets.x = 399;
  bullets.x=mainship.x;
  bullets.velocityY = -4;
  bullets.lifetime = 100;
  bulletsGroup.add(bullets);
  
 
}
function spawnEnemies() {
  //write code here to spawn the clouds
  if (frameCount % 90 === 0) {
    Enemies = createSprite(600,100,40,10);
    
    Enemies.x = Math.round(random(800,50));
    
    
    Enemies.velocityY = 5;
    
     //assign lifetime to the variable
     Enemies.lifetime = 184;
     EnemiesGroup.add(Enemies);

     Enemies.addImage(Enemies_attack);
     Enemies.scale = 0.2
    }
  }

  // spawning moon 
function spawnPlanet() {
  if (frameCount % 900 === 0){
    planet = createSprite(600,100,30,30);
   /* planet.scale = 0.1*/
    planet.x = Math.round(random(800,50));

    planet.velocityY = 4;
    planetGroup.add(planet);

    planet.addImage(planet_img);
    
    planet.depth  = mainship.depth
    mainship.depth += 1
    planet.scale = 3
    planet.lifetime = 300;
  }
}
// spawning mercury
function spawnPlanet1() {
  if (frameCount % 700 === 0){
    Planet1 = createSprite(600,100,30,30);
   /* planet.scale = 0.1*/
    Planet1.x = Math.round(random(800,50));

    Planet1.velocityY = 4;
    planetGroup1.add(Planet1);

    Planet1.addImage(planet1_img);
    
    Planet1.depth  = mainship.depth
    mainship.depth += 1
    Planet1.scale = 1
    Planet1.lifetime = 300;


  }
}
//spawning jupiter
function spawnPlanet2() {
  if (frameCount % 15000 === 0){
    planet2 = createSprite(600,100,30,30);
   /* planet.scale = 0.1*/
    planet2.x = Math.round(random(800,50));

    planet2.velocityY = 5;
    planetGroup2.add(planet2);

    planet2.addImage(planet2_img);
    
    planet2.depth  = mainship.depth
    mainship.depth += 1
    planet2.scale = 1
    planet2.lifetime = 300;


  }
}
//spawning stars
function spawnStar() {
  if (frameCount % 10 === 0){
    star = createSprite(600,100,30,30);
   /* planet.scale = 0.1*/
    star.x = Math.round(random(800,50));

    star.velocityY = 5;
    starGroup.add(star);

    star.addImage(star_img);
    
    star.depth  = mainship.depth
    mainship.depth += 1
    star.scale = 1
    star.lifetime = 300;


  }
}


