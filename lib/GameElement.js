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
}