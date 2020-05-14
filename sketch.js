//  Nayan Smuek
// 	8/21/19
//  Project 8/22

let dino, dinoImg;
function preload() {
  dinoImg = loadImage('images/dino.png');
  cactiImg = loadImage('images/cacti.png');
}
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  // background(225, 5, 5);
  // fill(200, 30, 150);
  background(50);
  dino = new dinoPlayer(20,600)
  cactus = new cacti(800,680)
}

function draw() {
  //image(dinoImg, 20, 200, dino.width / 6, dino.height / 6);

  if(!dino.gameOver){
  dino.run();
  cactus.run();
  } else if(dino.gameOver){
    background(255,0,0);
    textSize(64);
    fill(255);
    text('Game Over', 220, 380);
    rect(280, 440, 200, 50);
    textSize(32);
    fill(0);
    text('restart', 330, 474);

    if(mouseIsPressed&&mouseX>280&&mouseX<480&&mouseY>440&&mouseY<490){//check if button is pressed
    cactus.loc.x = 900;
    cacti.level = 1;
    cactus.vel.x = -4;
    dino.gameOver = false;
    }
  }
}

function keyPressed(){
  if (keyCode === UP_ARROW && dino.jump) {
    dino.vel.y = dino.vel.y-10;
    dino.jump = false;
  }
}