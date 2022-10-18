class User extends GameElement {
    static width = 100;
    static height = 20;

    constructor(xPos=0, yPos=0) {
        super();

        this.speed = 5;

        this.element = this.newDiv("user");
        
        this.setSize(User.width, User.height)
        this.updatePosition(xPos, yPos)
        this.setCssSize();
        
        this.setCorners();
    }

    move = (event) => {
        switch (event.key) {
            case "ArrowLeft":
                this.updatePosition(this.xPos - this.speed, this.yPos);
                break;
            case "ArrowRight":
                this.updatePosition(this.xPos + this.speed, this.yPos);
                break;
            default:
                break;
        }
    }
}
