class Suspender{
    constructor(body1,body2){
        var options={
        bodyA:body1,
        bodyB:body2,
       
        }
        this.Suspender = Constraint.create(options);
        World.add(world, this.Suspender);
        }
        display(){
            var pointA= this.Suspender.bodyA.position;
            var pointB= this.Suspender.bodyB.position;

            stroke("black");
            strokeWeight (4)
            var Anchor1X = pointA.x
            var Anchor1Y = pointA.y
            
            var Anchor2X = pointB.x
            var Anchor2Y = pointB.y
            line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        }
        
}