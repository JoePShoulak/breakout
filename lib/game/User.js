class User extends GameElement {
    static width = 100;
    static height = 20;

    constructor(xPos=0, yPos=0) {
        super();

        this.window;

        this.speed = 5;
        this.element = this.newDiv("user");
        
        this.setSize(User.width, User.height)
        this.updatePos(xPos, yPos)
        this.setCssSize();
    }

    validatePosition = (xPos, yPos) => {
        return xPos > 0 && 
            yPos > 0 &&
            xPos + this.width < this.window.width &&
            yPos + this.height < this.window.height;
    }

    move = (event) => {
        const dir = {
            left:  () => [this.xPos - this.speed, this.yPos],
            right: () => [this.xPos + this.speed, this.yPos]
        }

        let newPos = dir[event]?.();
        if (newPos != null) this.updatePos(...newPos, this.validatePosition)
    }
}
