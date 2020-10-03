class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        //this.sling1 = loadImage("sprites/sling1.png")
        //this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    display(){
        //image(this.sling1, 200, 20)
        //image(this.sling2, 175, 20)
        if(this.sling.bodyA){   
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(48, 22, 8)

        if(pointA.x < 300){
            strokeWeight(8);
        line(pointA.x - 25, pointA.y + 5, pointB.x, pointB.y);
        line(pointA.x - 25, pointA.y + 5, pointB.x + 25, pointB.y);
        image(this.sling3, pointA.x - 25, pointA.y - 15, 15, 30)
        }else{
            strokeWeight(3);
            line(pointA.x + 25, pointA.y + 5, pointB.x, pointB.y);
        line(pointA.x + 25, pointA.y + 5, pointB.x + 25, pointB.y);
        image(this.sling3, pointA.x + 25, pointA.y - 5, 15, 30);
        }
        pop();
        }
    }

    fly(){
    this.sling.bodyA = null;
    }
    attach(body){
    this.sling.bodyA = body;
    }
}