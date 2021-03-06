class cacti{
    constructor(x,y){
      cactiImg = loadImage('images/cacti.png');
      this.loc = createVector(x, y);
      this.acc = createVector (-0.05, 0);
      this.vel = createVector(0, 0);
      this.level = 0;
    }
    run(){
      this.update();
      this.render();
    }
    update(){

      textSize(64);
      fill(255);
      text(this.level, 380, 80);

      this.loc.add(this.vel);
      if(this.vel.x < 4){
      this.vel.add(this.acc);
      }
      if(this.loc.x < -100){
      this.loc.x = random(800,1000);
      if(this.level <=9){
      this.vel.x = random(-(5+this.level*0.5), -(7+(this.level*0.5)));
      }
      this.acc.x = 0;
      this.level++;
      }
    }

    render(){//render one frame
      image(cactiImg, this.loc.x, this.loc.y, cactiImg.width / 5, cactiImg.height / 5);
    }
  }