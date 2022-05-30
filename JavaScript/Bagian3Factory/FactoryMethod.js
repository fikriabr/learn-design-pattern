class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class PointFactory {
    static newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) {
        return new Point(
            rho * Math.cos(theta),
            rho * Math.sin(theta)
        );
    }
}

const p1 = PointFactory.newCartesianPoint(10, 2);
const p2 = PointFactory.newPolarPoint(9, 45)

console.log(p1);
console.log(p2);
