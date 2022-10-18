class Ball extends GameElement {
    static width = 20;
    static height = Ball.width;
    static borderRadius = Ball.width/2;

    constructor(xPos, yPos) {
        super();

        this.window;

        this.element = this.newDiv("ball").css("border-radius", Ball.borderRadius);

        this.setSize(Ball.width, Ball.height);
        this.setCssSize();
        this.updatePos(xPos, yPos);

        this.setCorners();
    }
}