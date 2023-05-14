//<<<<<<<<<========================key of guard ==========================>>>>>>>>>>>>>>>

type Alphanumeric = string | number

function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
    if (typeof param1 === 'number' && typeof param2 == 'number') {
        return param1 + param2
    } else {
        return param1.toString() + param2.toString()
    }
}

add(1, 2)
add('1', '2')

//<<<<<<<<<========================= In Guard =============================>>>>>>>>>>>>>>>

type NormalUserType = {
    name: string
}

type AdminUserType = {
    name: string
    role: string
}

function getUser(user: NormalUserType | AdminUserType) {
    if ('role' in user) {
        return `I am ${user.name} and I am an ${user.role}`
    }
    else {
        return `I am ${user.name} and I am a normal user`
    }
}

const normalUser1: NormalUserType = {
    name: 'Mr. Allu'
}
const adminUser1: AdminUserType = {
    name: 'Mr. Khan',
    role: 'Admin'
}

// console.log(getUser(adminUser1));


// <<<<<<<<<<========================instanceof Guard =========================>>>>>>>>>>>>

class Animals {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log('I am making sound');
    }
}

class Dog extends Animals {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeBark() {
        console.log('I am barking');
    }
}

class Cat extends Animals {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeMeow() {
        console.log('I am meowing');
    }
}
function isDog(animal: Animals): animal is Dog {
    return animal instanceof Dog;
}
function isCat(animal: Animals): animal is Cat {
    return animal instanceof Cat;
}


function getAnimal(animal: Animals) {
    if (animal instanceof Dog) {
        animal.makeBark();
    }
    else if (animal instanceof Cat) {
        animal.makeMeow();
    }
    else {
        animal.makeSound();
    }
}

const animal1 = new Dog('Tommy', 'Dog');
const animal2 = new Cat('Kitty', 'Cat');

getAnimal(animal1);