/* == BLOCK CLASS == */
class Block {
    /* These will never change from block to block and 
       should be able to be referenced without an object */
    static width = 100;
    static height = 20;
    static size = [Block.width, Block.height];

    // Returns (num) rows of 5 blocks each centered in the grid
    // TODO: Make this work dynamically off the grid size. 
    static makeRows = (num) => {
        let blocks = [];
        
        const margin = 10;
        const xSpace = Block.width + margin;
        const ySpace = Block.height + margin;

        for (let i=0; i <5; i++) {
            for (let j=1; j<=num; j++) {
                let x = margin + xSpace*i;
                let y = Window.height - ySpace*j;
        
                blocks = [...blocks, new Block(x, y)];
            }
        }

        return blocks;
    }

    constructor(xPos=0, yPos=0) {
        // Get the anchor of the block element (lower left corner)
        this.xPos = xPos;
        this.yPos = yPos;
        this.position = [this.xPos, this.yPos];

        // Set our corners
        this.bottomLeft     = [ this.xPos,               this.yPos                ];
        this.bottomRight    = [ this.xPos + Block.width, this.yPos                ];
        this.topLeft        = [ this.xPos,               this.yPos + Block.height ];
        this.topRight       = [ this.xPos + Block.width, this.yPos + Block.height ];

        // Create the dom element
        this.element = $('<div>').addClass('block');

        // Set the size and position css here so we're not coding in our stylesheet
        setCssSize(this.element, ...Block.size);
        setCssPosition(this.element, ...this.position);
    }
}
