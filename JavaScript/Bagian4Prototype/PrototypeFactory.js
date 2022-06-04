class Address {
    constructor(suite, city, country) {
        this.suite = suite;
        this.city = city;
        this.country = country;
    }
    toString() {
        return `Suite ${this.suite}, ${this.city}, ${this.country}`;
    }
}

class Employee {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    toString() {
        return `Employee ${this.name}, ${this.address}`
    }

    greet () {
        console.log(`Hi my name is ${this.name}.`);
    }
}

class Serializer {
    constructor(types) {
        this.types = types;
    }

    markRecursive(object) {
        let index = this.types.findIndex((t) => {
            return t.name === object.constructor.name
        });

        if (index != -1) {
            object['typeIndex'] = index;

            for ( let key in object ) {
                if (object.hasOwnProperty(key) && object[key] !== null) {
                    this.markRecursive(object[key])
                }
            }
        }
    }

    reconstructRecursive(object) {
        if (object.hasOwnProperty('typeIndex')) {
            let type = this.types[object.typeIndex];
            let obj = new type();

            for (let key in object) {
                if (object.hasOwnProperty(key) && object[key] !== null) {
                    obj[key] = this.reconstructRecursive(object[key]);
                }
            }
            delete obj.typeIndex;
            return obj;
        }
        return object;
    }

    clone(object) {
        this.markRecursive(object);
        let copy = JSON.parse(JSON.stringify(object));
        return this.reconstructRecursive(copy)
    }

}


class EmployeeFactory {
    static _newEmployee(proto, name, suite) {
        let copy = EmployeeFactory.serializer.clone(proto);
        copy.name = name;
        copy.address.suite = suite;
        return copy;
    }

    static newMainOfficeEmployee(name, suite) {
        return this._newEmployee(
            EmployeeFactory.main, name, suite
        );
    }

    static newAuxOfficeEmployee(name, suite) {
        return this._newEmployee(
            EmployeeFactory.aux, name, suite
        );
    }
}

EmployeeFactory.serializer = new Serializer([Employee, Address]);
EmployeeFactory.main = new Employee(null, new Address(null, 'city', 'country'));
EmployeeFactory.aux = new Employee(null, new Address(null, 'city 2', 'country 2'));

const emp1 = EmployeeFactory.newMainOfficeEmployee('John', 4321);
const emp2 = EmployeeFactory.newAuxOfficeEmployee('Jane', 233);

console.log(emp1.toString());
console.log(emp2.toString());
