class dinoPlayer{
    constructor(x,y){
      dinoImg = loadImage('images/dino.png');
      this.loc = createVector(x, y);
      this.acc = createVector (0, 0.2);
      this.vel = createVector(0, 0);

      this.jump = true;
      this.gameOver = false;
    }
    run(){//use this so you dont have to run all of these for each ball
      this.update();
      this.render();
    }
    update(){//update location

      this.loc.add(this.vel);
      this.vel.add(0, 0.35);

      if ((keyIsDown(RIGHT_ARROW)) && (this.jump == false) && (this.vel.y>0)){
        this.vel.add(0, -0.3);
      }

      if(this.loc.y > height-100){
        this.vel.y = 0;
        dino.jump = true;
      }
      this.die();
    }

    render(){//render one frame
      background(50);
      image(dinoImg, this.loc.x, this.loc.y, dinoImg.width / 6, dinoImg.height / 6);
    }

    die(){ //code from mozilla       rect 1 dino     rect 2 cacti
      if (this.loc.x < cactus.loc.x + (dinoImg.width/6) &&
        this.loc.x + dinoImg.width/6 > cactus.loc.x &&
        this.loc.y < cactus.loc.y + (cactiImg.height/5) &&
        this.loc.y + (dinoImg.height/6) > cactus.loc.y) {
          death.play();
      this.gameOver = true;
     }
    }
  }