const sqrt = Math.sqrt;

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.magnitude = this.getMagnitude();

        this.normal = this.magnitude == 1 ? this : this.normalize();
    }

    toArray = () => [this.x, this.y];

    getMagnitude = () => sqrt(this.x**2 + this.y**2);

    normalize = () => new Vector(...this.toArray().map(n => n/this.magnitude));

    times = (scalar) => new Vector(...this.toArray().map(n => n*scalar));
}
