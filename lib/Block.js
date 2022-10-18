/* == BLOCK CLASS == */
class Block extends GameElement {
    // Returns (num) rows of 5 blocks each centered in the grid
    // TODO: Make this work dynamically off the grid size. 

    static width = 100;
    static height = 20;

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
        super();

        this.window;

        this.element = this.newDiv("block");
        
        this.setSize(Block.width, Block.height);
        this.setCssSize();
        this.updatePos(xPos, yPos);

        this.setCorners();
    }
}
