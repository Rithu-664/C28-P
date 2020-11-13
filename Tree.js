class Tree{
    constructor(x,y,w,h){
        var prop={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,w,h,prop);
        this.w=w 
        this.h=h
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        fill("green")
        rectMode(CENTER)
        //rect(pos.x,pos.y,this.w,this.h)
        image(this.image,pos.x,pos.y,300,350)
    }
}