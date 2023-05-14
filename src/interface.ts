type User={
    name: string;
    age: number;
}

type extendUser = User &{
    role: string;
}

interface IUser{
    name: string;
    age: number;
}

interface IExtendUser extends IUser{
    role: string;
};



// =======================================================
type rollNumber =number;

type addNumbersType = (num1: number, num2: number) => number;

interface IAddNumbers{
    (num1: number, num2: number): number;
}
const addNumbers: IAddNumbers = (num1, num2)=> num1 + num2;


// =======================================================
type rollNumbersType = number[];
interface IRollNumbers{
    [index: number]: number;
}

const rollNumbers: IRollNumbers = [1,2,3,4,5];



const user: IExtendUser = {
    name: 'Allies',
    age: 20,
    role: 'admin'
}

// const userWithTypeAlias : User ={
//     name: 'Allies',
//     age: 20
// }

// const userWithInterface : IUser ={
//     name: 'Interface',
//     age: 30
// }