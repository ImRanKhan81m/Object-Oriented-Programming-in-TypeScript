type PersonType ={
    name: string;
    age: number;
    address: string;
} 

type newType = "name" | "age" | "address"; /* manually kora */

type newTypeUsingKeyOf = keyof PersonType; 

// const a: newType = 'age'
// const b: newTypeUsingKeyOf = 'hh'

function getProperty<X, Y extends keyof X> (obj: X, key: Y){
    obj[key];
}

const property = getProperty({name: 'Imran', age: 23, address: 'Dhaka'}, 'name');
