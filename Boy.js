class Boy{
    constructor(x,y,w,h){
        var prop={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,w,h,prop);
        this.image= loadImage("boy.png");
        this.w=w
        this.h=h
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("pink")
        rectMode(CENTER)
        //rect(pos.x,pos.y,this.w,this.h)
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,100,200);
    }
    
}