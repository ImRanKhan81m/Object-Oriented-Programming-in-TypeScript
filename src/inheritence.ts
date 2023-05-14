
class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `${this.name} is sleeping for ${hours} hours`;
    }
}

// class Student {
//     name: string;
//     age: number;
//     address: string;
//     constructor(name: string, age: number, address: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     makeSleep(hours: number): string {
//         return `${this.name} is sleeping for ${hours} hours`;
//     }
// }

class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}

const student1 = new Student("Hasibul", 20, "Dhaka");


class Teacher extends Parent{
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }

    takeClasses(numOfClass: number): string {
        return `${this.name} is taking class ${numOfClass} `;
    }
}

const teacher1 = new Teacher("Imran", 20, "Dhaka", "Lecturer");
