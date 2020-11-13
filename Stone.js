class Stone{
    constructor(x,y,r){
        var prop={
          isStatic: false,
          restitution: 0,
          friction: 1,
          density: 1.2
        }
        this.r=r
        
        this.body=Bodies.circle(x,y,r,prop);
        this.image=loadImage("stone.png")
        World.add(world,this.body);
    }

    display(){
       fill("black")
        //ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2);
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
}