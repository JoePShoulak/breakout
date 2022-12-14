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

    updatePos = (xPos=this.xPos, yPos=this.yPos, validateCallback=null) => {
        if (validateCallback?.(xPos, yPos) || validateCallback == null) {

            this.xPos = xPos;
            this.yPos = yPos;
            
            this.position = [this.xPos, this.yPos];
            
            this.setCssPosition();
        }
    }

    setSize = (width, height) => {
        this.width = width;
        this.height = height;
        this.size = [this.width, this.height];
    }

    newDiv = (className) => $("<div>").addClass(className);
}