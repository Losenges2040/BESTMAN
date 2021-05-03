class drops{
    constructor(x,y){
        options = {
            airFriction = 0.1,
            Friction=0.5
        }

        this.rain = Bodies.circle(x,y,5,options)
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400)},{y:random(0,400)})
        }
    }
}