
// type GenericArray<T> = Array<T>

// // const rollNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const rollNumber2: string [] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// // const rollNumbers3 : Array<boolean> =[true, false]


// const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const rollNumber2: GenericArray<string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// const rollNumbers3: GenericArray<boolean> = [true, false]

// type NameRollType = {
//     name: string;
//     roll: number;
// };

// const userNameAndRollNumbers: GenericArray<NameRollType> = [{
//     name: 'Mr. Habul',
//     roll: 1
// }, {
//     name: 'Mr. Kabul',
//     roll: 2
// }]

// // Generic tuple

// type GenericTuple<X, Y> = [X, Y];

// const relation: GenericTuple<string, string> = ['Mr. Habul', 'Mr. Kabul'];

// interface RelationWithSalaryInterface {
//     name: string;
//     salary: number;
// }

// const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [{
//     name: 'Imran Hossen',
//     salary: 10000
// },
//     'Afroza'
// ];


// //  Generic interface

// interface CrushInterface<T, U= null>{
//     name: string;
//     husband: T;
//     wife?: U;
// }

// interface PersonInterface{
//     name: string;
//     age: number;
// }

// const crush1: CrushInterface<boolean, string> = {
//     name: 'Afroza',
//     husband: true,
//     wife: "Chokina"
// }

// const crush2: CrushInterface<string> = {
//     name: 'Afroza',
//     husband: 'Imran'
// }

// interface HusbandInterface {
//     name: string;
//     salary: number;
// }

// const crush3: CrushInterface<HusbandInterface> = {
//     name: 'Afroza',
//     husband: {
//         name: 'Imran',
//         salary: 10000
//     }
// }

// const crush4 : CrushInterface<PersonInterface, PersonInterface> = {
//     name: 'Afroza',
//     husband: {
//         name: 'Imran',
//         age: 23
//     },
//     wife: {
//         name: 'Afroza',
//         age: 20
//     }
// }
