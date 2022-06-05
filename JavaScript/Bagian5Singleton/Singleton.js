class Singleton {
    constructor() {
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }
        this.constructor.instance = this;

        console.log("Initializing Instance");
    }
}

const s1 = new Singleton();
const s2 = new Singleton();

console.log(`Is identical ${s1 === s2}`);
