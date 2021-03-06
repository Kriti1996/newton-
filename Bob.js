class Bob {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            friction: 0.5,
            frictionAir :0,
            density: 7,
            restitution: 1,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("ball.png");

        this.body = Bodies.circle(this.x, this.y, this.r / 2, options)
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r)
        ellipseMode(CENTER);
        fill(0, 0, 0, 0)
        ellipse(0, 0, this.r, this.r)
        pop()
    }
}