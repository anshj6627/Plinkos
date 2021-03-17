class Plinko{
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10,option);
        this.r=10;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        translate(0,0);
        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}