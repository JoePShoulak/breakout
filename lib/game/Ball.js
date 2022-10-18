class Ball extends GameElement {
    static width = 20;
    static height = Ball.width;
    static borderRadius = Ball.width/2;
    static speed = 3;

    constructor(xPos, yPos) {
        super();

        this.window;

        this.lastPosition;

        this.direction = randomUnitVector(Ball.speed);

        this.element = this.newDiv("ball").css("border-radius", Ball.borderRadius);

        this.setSize(Ball.width, Ball.height);
        this.setCssSize();
        this.updatePos(xPos, yPos);
    }

    validatePosition = (xPos, yPos) => {
        return xPos > 0 && 
        yPos > 0 &&
        xPos + this.width < this.window.width &&
        yPos + this.height < this.window.height;
    }

    bounce = () => {
        if (this.xPos < 2*this.width || this.xPos > Window.width - 2*this.width) {
            // Wall left/right bounce
            this.direction.x = -this.direction.x;
        } else if (this.yPos < 2*this.height || this.yPos > Window.height - 2*this.height) {
            // Wall top/bottom bounce
            this.direction.y = -this.direction.y;
        } else {
            // We must be stuck, go in a random direction
            // FIXME
            this.direction = randomUnitVector(Ball.speed);
        }
    }

    detectUserCollision = () => {
        // FIXME: This isn't jquery. It's also bad. 
        const domRect1 = document.getElementsByClassName("ball")[0].getBoundingClientRect();
        const domRect2 = document.getElementsByClassName("user")[0].getBoundingClientRect();
      
        return !(
          domRect1.top > domRect2.bottom ||
          domRect1.right < domRect2.left ||
          domRect1.bottom < domRect2.top ||
          domRect1.left > domRect2.right
        );
      }

    move = () => {
        let newPos = [this.xPos + this.direction.x, this.yPos + this.direction.y];
        this.lastPosition = this.position;
        this.updatePos(...newPos, this.validatePosition)  
        if (compareArrays(this.position, this.lastPosition)) this.bounce();

        if (this.detectUserCollision()) console.log("hit")
      }
}