class Paper {
    constructor(x,y) {
      var options = {
        'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y,20,20, options);
      World.add(world, this.body);
      this.image = loadImage("paper.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image, 0, 0,60,60);
      pop();
    }
  }