class Paper{
    constructor(x, y, radius){
        var options ={
            restitution:0.3,
            friction: 0,
            density:1.3
        }
        this.image = loadImage("paper.png");          
        this.body = Bodies.circle(x, y, (radius-20)/2, options);
        this.radius = radius;  
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);        
        image(this.image,pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}