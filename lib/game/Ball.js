class Ball extends GameElement {
    static width = 20;
    static height = Ball.width;
    static borderRadius = Ball.width/2;

    constructor(xPos, yPos) {
        super();

        this.window;
        this.velocity;

        this.direction = {
            x: 1,
            y: 1
        }

        this.element = this.newDiv("ball").css("border-radius", Ball.borderRadius);

        this.setSize(Ball.width, Ball.height);
        this.setCssSize();
        this.updatePos(xPos, yPos);

        this.setCorners();
    }

    validatePosition = (xPos, yPos) => {
        return xPos > 0 && 
            yPos > 0 &&
            xPos + this.width < this.window.width &&
            yPos + this.height < this.window.height;
    }

    move = () => {
        let newPos = [this.xPos + this.direction.x, this.yPos + this.direction.y];
        this.updatePos(...newPos, this.validatePosition)  
      }
}