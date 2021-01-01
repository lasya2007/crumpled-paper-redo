class Bin{
    constructor(x,y,angle){
        var options={
            'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,15,100,options);
        this.x=x;
        this.y=y;
        this.width=15;
        this.height=100;
        Matter.Body.setAngle(this.body,angle);
        this.angle=angle;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.x,this.y);
        rotate(this.angle)
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}