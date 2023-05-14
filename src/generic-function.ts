// // arrow function

// const createArray = (param: string): string[] => {
//     return [param]
// }

// const createArray1 = <T>(param: T): T[] => {
//     return [param]
// }

// const result1 = createArray1<string>('Bangladesh');
// const result2 = createArray1<number>(100);
// const result3 = createArray1<boolean>(true);
// const result4 = createArray1<object>({
//     name: 'Imran',
//     age: 23
// })

// const createArrayTuple = <T, U>(param1: T, param2: U): [T, U] => {
//     return [param1, param2]
// }

// function createArrayTuple1<T, U>(param1: T, param2: U): [T, U] {
//     return [param1, param2]
// }

// const result5 = createArrayTuple<string, number>('Bangladesh', 100);
// const result6 = createArrayTuple<number, string>(100, 'Bangladesh');
// const result7 = createArrayTuple<boolean, Array<string>>(true, ['Bangladesh', 'India']);            

// // spread operator

// const crush ='Afroza Parvin';
// const myInfo={
//     name: 'Imran Hossen',
//     age: 23,
//     salary: 100000
// };

// // const newData = { ...myInfo, crush}

// const addMeInMyCrush = (param: object)=>{
//     const crush = 'Afroza Parvin';
//     const newData = { ...param, crush}
//     return newData 
// }

// const result8 = addMeInMyCrush(myInfo);

