class User {
    static width = 100;
    static height = 20;
    static size = [User.width, User.height];

    constructor(xPos=0, yPos=0) {
        this.xPos = xPos;
        this.yPos = yPos;

        this.position = [this.xPos, this.yPos];

        this.element = $('<div>').addClass('user');

        setCssSize(this.element, ...User.size);
        setCssPosition(this.element, ...this.position);
    }
}
