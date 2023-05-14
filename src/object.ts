// class Animal {
//     public name: string;
//     public species: string;
//     public  sound: string;

//     // Parameter properties
//     constructor(name: string, species: string, sound: string) {
//         this.name = name;   
//         this.species = species;
//         this.sound = sound;
//     }
//     public  makeSound(){
//         console.log(`The ${this.name} says ${this.sound}`)
//     }
// }


class Animal {
    // Parameter properties
    constructor(public name: string, public species: string, public sound: string) {
    }
    public  makeSound(){
        console.log(`The ${this.name} says ${this.sound}`)
    }
}

const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
const cat = new Animal("Persian", "Cat", "Meow Meow");

dog.makeSound(); // The German Shepard says Ghew Ghew
cat.makeSound(); // The Persian says Meow Meow
