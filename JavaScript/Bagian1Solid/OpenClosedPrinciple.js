/**
 * Open Closed Principle
 * ----------------------------------------------------------------
 * Open for extension, closed for modification
 */

const Gender = Object.freeze({
    male: 'male',
    female: 'female',
});

const Ethnic = Object.freeze({
    jawa: 'jawa',
    sunda: 'sunda',
    betawi: 'betawi',
    other: 'other',
})

class Person {
    constructor(name, gender, ethnic) {
        this.name = name;
        this.gender = gender;
        this.ethnic = ethnic;
    }
}

class FindPerson {
    findByGender(personList, gender) {
        return personList.filter((p) => p.gender === gender)
    }

    findByEthnic(personList, ethnic) {
        return personList.filter((p) => p.ethnic === ethnic)
    }
}

class Specification {
    constructor() {
        if (this.constructor.name === 'Specification') {
            throw new Error('Specification is abstract')
        }
    }

    isSatisfied(_person) { /* not implemented */ }
}

// specification
class GenderSpecification extends Specification {
    constructor(gender) {
        super()
        this.gender = gender;
    }

    isSatisfied(person) {
        return person.gender === this.gender;
    }
}

class EthnicSpecification extends Specification {
    constructor(ethnic) {
        super()
        this.ethnic = ethnic;
    }

    isSatisfied(person) {
        return person.ethnic === this.ethnic;
    }
}

class FindCombination {
    filter(personList, spec) {
        return personList.filter((person) => spec.isSatisfied(person));
    }
}

class AndSpesification {
    constructor(...specs) {
        this.specs = specs;
    }

    isSatisfied(person) {
        return this.specs.every((x) => x.isSatisfied(person));
    }
}

class OrSpesification {
    constructor(...specs) {
        this.specs = specs;
    }

    isSatisfied(person) {
        let satisfied = false;
        this.specs.forEach((spec) => {
            if (spec.isSatisfied(person)) {
                satisfied = true;
            }
        });
        return satisfied;
    }
}

const budi = new Person("Budi", Gender.male, Ethnic.jawa);
const ani = new Person("Ani", Gender.female, Ethnic.sunda);
const andi = new Person("Andi", Gender.male, Ethnic.betawi);
const siti = new Person("Siti", Gender.female, Ethnic.jawa);

const persons = [budi, ani, andi, siti];

console.log('Laki-laki : ');
const fp = new FindPerson(persons)
for (let p of fp.findByGender(persons, Gender.male)) {
    console.log(` * ${p.name} adalah laki-laki`)
}

const combinationFind = new FindCombination();
console.log('Laki-Laki (new) :')
for (let p of combinationFind.filter(persons, new GenderSpecification(Gender.male))) {
    console.log(` * ${p.name} adalah laki-laki`)
}

console.log('Laki-laki bersuku Betawi:')
const andSpec = new AndSpesification(
    new GenderSpecification(Gender.male),
    new EthnicSpecification(Ethnic.betawi),
)
for (let p of combinationFind.filter(persons, andSpec)) {
    console.log(` * ${p.name} adalah laki-laki bersuku betawi`)
}

console.log('Orang sunda atau jawa')
const orSpec = new OrSpesification(
    new EthnicSpecification(Ethnic.sunda),
    new EthnicSpecification(Ethnic.jawa),
)
for (let p of combinationFind.filter(persons, orSpec)) {
    console.log(` * ${p.name} bersuku ${p.ethnic}`)
}
