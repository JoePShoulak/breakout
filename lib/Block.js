/* == BLOCK CLASS == */
class Block {
    /* These will never change from block to block and 
       should be able to be referenced without an object */
    static width = 100;
    static height = 20;
    static size = [Block.width, Block.height];

    constructor(xPos = 0, yPos = 0) {
        // Get the anchor of the block element (lower left corner)
        this.xPos = xPos;
        this.yPos = yPos;
        this.pos = [this.xPos, this.yPos];

        // Set our corners
        this.bottomLeft     = [ this.xPos,               this.yPos                ];
        this.bottomRight    = [ this.xPos + Block.width, this.yPos                ];
        this.topLeft        = [ this.xPos,               this.yPos + Block.height ];
        this.topRight       = [ this.xPos + Block.width, this.yPos + Block.height ];

        // Create the dom element
        this.element = $('<div>').addClass('block');

        // Set the size and position css here so we're not coding in our stylesheet
        setSize(this.element, ...Block.size);
        setPosition(this.element, ...this.pos)
    }
}
