class Project {
    constructor() {
        this.projectName = '';
        this.companyName = '';
        this.companyAddress = '';
        this.companyPostcode = '';
        this.teams = [];
    }
}

class Team {
    constructor() {
        this.teamName = '';
        this.teamLead = '';
        this.teamMembers = [];
    }
}

class Person {
    constructor() {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.address = '';
        this.postCode = '';
        this.salary = '';
    }
}

class ProjectBuilder {
    constructor(project = new Project()) {
        this.project = project;
    }
    addTeams(team = new Team()) {
        this.project.teams.push(team);
        return this;
    }
    get setDetail() {
        return new ProjectDetailBuilder(this.project);
    }
    build() {
        return this.project;
    }
}

class ProjectDetailBuilder extends ProjectBuilder {
    constructor(project) {
        super(project);
    }
    name(projectName) {
        this.project.projectName = projectName;
        return this;
    }
    companyName(companyName) {
        this.project.companyName = companyName;
        return this;
    }
    address(address) {
        this.project.companyAddress = address;
        return this;
    }
    postCode(postCode) {
        this.project.companyPostcode = postCode;
        return this;
    }
}

class TeamBuilder {
    constructor() {
        this.team = new Team();
    }
    name(teamName) {
        this.team.teamName = teamName;
        return this;
    }
    leadBy(leadName) {
        this.team.teamLead = leadName;
        return this;
    }
    addMember(...member) {
        this.team.teamMembers.push.apply(this.team.teamMembers, member);
        return this;
    }
    build() {
        return this.team;
    }
}

class PersonBuilder {
    constructor(person = new Person()) {
        this.person = person;
    }
    name(name) {
        this.person.name = name;
        return this;
    }
    email(email) {
        this.person.email = email;
        return this;
    }
    phone(phone) {
        this.person.phone = phone;
        return this;
    }
    address(address) {
        this.person.address = address;
        return this;
    }
    postCode(postCode) {
        this.person.postCode = postCode;
        return this;
    }
    salary(salary) {
        this.person.salary = salary;
        return this;
    }
    build() {
        return this.person;
    }
}

/** Create Person */
const person1 = new PersonBuilder()
    .name('Sanusi')
    .email('san@mail.com')
    .phone('1234')
    .address('jakarta')
    .salary(1200)
    .postCode('A123')
    .build();

const person2 = new PersonBuilder()
    .name('Sulaiman')
    .email('sul@mail.com')
    .phone('1235')
    .salary(1000)
    .build();

const person3 = new PersonBuilder()
    .name('Gunadi')
    .email('gun@mail.com')
    .phone('2236')
    .address('jakarta')
    .salary(1000)
    .postCode('D123')
    .build();

const person4 = new PersonBuilder()
    .name('Ginanjar')
    .email('gin@mail.com')
    .phone('2336')
    .address('jakarta')
    .salary(1000)
    .build();

/** Create Project & Team */
const githubProject = new ProjectBuilder().setDetail
    .name('github123')
    .companyName('github.com')
    .postCode('1234')
    .address('jakarta')
    .addTeams(
        new TeamBuilder()
            .name('Front End')
            .leadBy(person1)
            .addMember(person1, person2)
            .build()
    )
    .addTeams(
        new TeamBuilder()
            .name('Back End')
            .leadBy(person3)
            .addMember(person3, person4)
            .build()
    )
    .build();
