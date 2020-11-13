class Slingshot{
    constructor(body1,point){
       var prop={
           bodyA: body1,
           pointB: point,
           stiffness: 0.003
       }

       this.chain = Constraint.create(prop)
       World.add(world,this.chain);
    }

    fly(){
        this.chain.bodyA=null;
        console.log("hello")
    }

    attatch(body){
         this.chain.bodyA=body

    }
    display(){
        if(this.chain.bodyA){
        var pos1 = this.chain.bodyA.position;
        var pos2 = this.chain.pointB;
        line(pos1.x,pos1.y,pos2.x,pos2.y);
        }       
    }
}