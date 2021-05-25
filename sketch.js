var bg,bg2,form,system,code,security,treasure;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  bg2 = loadImage("aladdin_cave2.jpg")
  treasure = loadImage("treasure.jpg")
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  function clues(){
  fill("white")
  textSize(15)
  text("R E V B A I L A", 100,50)
  fill("lightblue")
  text("HINT : Always changing ,Not constant !!",100,70)
  }


  if(score === 2){
    clear()
    background(bg2)
    fill("black")
    textSize(40)
    text("NEXT ROOM UNLOCKED",250,200);
  }

  if(score === 3) {
    clear()
    background(treasure)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}

