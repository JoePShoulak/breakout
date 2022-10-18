class Ball extends GameElement {
    static width = 20;
    static height = 20;
    static borderRadius = 10;

    constructor(xPos, yPos) {
        super();

        this.window;

        this.element = this.newDiv("ball");

        this.setSize(Ball.width, Ball.height);
        this.setCssSize();
        this.updatePos(xPos, yPos);

        this.setCorners();
    }
}