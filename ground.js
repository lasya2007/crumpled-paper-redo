class Ground{
    constructor(x,y){
        var options={
            'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,800,15,options);
        this.x=x;
        this.y=y;
        this.width=800;
        this.height=15;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}