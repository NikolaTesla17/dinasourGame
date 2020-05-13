//  Nayan Smuek
// 	8/21/19
//  Project 8/22

let dino, dinoImg;
function preload() {
  dinoImg = loadImage('images/dino.png');
}
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  // background(225, 5, 5);
  // fill(200, 30, 150);
  background(50);
  dino = new dinoPlayer(20,600)
}

function draw() {
  //image(dinoImg, 20, 200, dino.width / 6, dino.height / 6);

  dino.run();
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    dino.vel.y = dino.vel.y-8;
  }
} 


