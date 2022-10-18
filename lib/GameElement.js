class GameElement {
    constructor() {
        this.element;
        this.xPos;
        this.yPos;

        this.width;
        this.height;
    }

    setCssSize = () => {
        this.element.css("width", `${this.width}px`);
        this.element.css("height", `${this.height}px`);
    }

    setCssPosition = () => {
        this.element.css("left", this.xPos);
        this.element.css("bottom", this.yPos);
    }

    setCorners = () => {
        // Set our corners
        this.bottomLeft     = [ this.xPos,              this.yPos               ];
        this.bottomRight    = [ this.xPos + this.width, this.yPos               ];
        this.topLeft        = [ this.xPos,              this.yPos + this.height ];
        this.topRight       = [ this.xPos + this.width, this.yPos + this.height ];
    }

    updatePosition = (xPos=this.xPos, yPos=this.yPos) => {
        this.xPos = xPos;
        this.yPos = yPos;

        this.position = [this.xPos, this.yPos];

        this.setCssPosition();
    }

    setSize = (width, height) => {
        this.width = width;
        this.height = height;
        this.size = [this.width, this.height];
    }

    newDiv = (className) => $("<div>").addClass(className);
}