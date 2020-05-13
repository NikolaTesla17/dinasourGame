class dinoPlayer{
    constructor(x,y){
      dinoImg = loadImage('images/dino.png');
      this.loc = createVector(x, y);
      this.acc = createVector (0, 0.2);
      this.vel = createVector(0, 0);

    }
    run(){//use this so you dont have to run all of these for each ball
      this.update();
      this.render();
    }
    update(){//update location

      this.vel.add(this.acc);

      this.loc.add(this.vel)
    }

    render(){//render one frame
      background(50);
      image(dinoImg, this.loc.x, this.loc.y, dinoImg.width / 6, dinoImg.height / 6);
    }
  }