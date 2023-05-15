class Person {
    takeNap() {
        console.log('I am sleeping 8hours a day');
    }
}

class Students extends Person {
    takeNap(): void {
        console.log('I am sleeping 14hours a day');
    }
}

class Developer extends Person {
    takeNap(): void {
        console.log('I am sleeping 6hours a day');
    }
}

function getNap(param: Person) {
    param.takeNap();
}

const person1 = new Person();
const person2 = new Students();
const person3 = new Developer();

getNap(person1);
getNap(person2);
getNap(person3);

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height : number;
    width : number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }
}

function getAreaOfShape(param: Shape){
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 20));