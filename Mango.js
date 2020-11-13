class Mango{
    constructor(x,y,r){
        var prop={
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.body=Bodies.circle(x,y,r,prop);
        this.r=r;
        this.mango = loadImage("mango.png")
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        //ellipse(pos.x,pos.y,this.r*2,this.r*2);
        imageMode(CENTER);
        image(this.mango,pos.x,pos.y,50,50);
    }
}