class Stone {
    constructor(x, y, w,h) 
    {
      let options = {
       isStatic:false
      };
      
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }
  
    display() {
      let pos = this.body.position;
      push();
      ellipseMode(RADIUS);
      noStroke();
      fill("white");
      ellipse(pos.x,pos.y, this.w, this.h);
      pop();
    }
}