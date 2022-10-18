class User extends GameElement {
    constructor(xPos=0, yPos=0) {
        super();

        this.speed = 5;
        
        this.width = 100;
        this.height = 20;
        this.size = [this.width, this.height];

        this.element = $('<div>').addClass('user');

        this.updatePosition(xPos, yPos)
        this.setCssSize();
    }

    updatePosition = (xPos=this.xPos, yPos=this.yPos) => {
        this.xPos = xPos;
        this.yPos = yPos;

        this.position = [this.xPos, this.yPos];

        this.setCssPosition();
    }

    move = (event) => {
        switch (event.key) {
            case "ArrowLeft":
                this.updatePosition(xPos - this.speed, this.yPos);
                break;
            case "ArrowRight":
                this.updatePosition(xPos + this.speed, this.yPos);
                break;
        
            default:
                break;
        }
    }
}
