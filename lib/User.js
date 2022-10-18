class User extends GameElement {
    static width = 100;
    static height = 20;

    constructor(xPos=0, yPos=0, boundary) {
        super();

        this.speed = 5;

        this.element = this.newDiv("user");
        
        this.setSize(User.width, User.height)
        this.updatePosition(xPos, yPos)
        this.setCssSize();

        this.setCorners();
    }

    validatePosition = (xPos, yPos, boundary) => {
        return xPos > 0 && 
            yPos > 0 &&
            xPos + this.width < boundary.width &&
            yPos + this.height < boundary.height;
    }

    move = (event, boundary) => {
        let newPosition;

        switch (event.key) {
            case "ArrowLeft":
                newPosition = this.xPos - this.speed;
                if (this.validatePosition(newPosition, this.yPos, boundary)) {
                    this.updatePosition(newPosition);
                }
                break;
            case "ArrowRight":
                newPosition = this.xPos + this.speed;
                if (this.validatePosition(newPosition, this.yPos, boundary)) {
                    this.updatePosition(newPosition);
                }
                break;
            default:
                break;
        }
    }
}
