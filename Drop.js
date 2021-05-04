class createDrops{
    constructor(x,y){
        var options = {
            airFriction :0.1,
            Friction:0.5
            
        }

        this.image = loadImage("bat/ok654.png");
        this.rain = Bodies.circle(x,y,5,options)
        World.add(world, this.rain)
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400)},{y:random(0,400)})
        }
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.rain.position.x,this.rain.position.y);

    }
}

