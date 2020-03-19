function Circle(radius){
    this.radius = radius;
    this.location = {
        x:1,
        y:2
    };
    this.draw = function(){
        console.log("draw");
    };
}

const circle = new Circle(4);