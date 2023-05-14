// // Mocking 
// // const makePromise = () =>{
// //     return new Promise((resolve, reject) => {
// //         const data : string = 'Data is fetched from server';
// //         if(data){
// //             resolve(data);
// //         }else{
// //             reject('No data found');
// //         }
// //     }
// //     )
// // }
// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data: string = 'Data is fetched from server';
//         if (data) {
//             resolve(data);
//         } else {
//             reject('No data found');
//         }
//     }
//     )
// }
// const getPromiseData = async (): Promise<string> => {
//     const data = await makePromise();
//     return data;
// }

// const makePromiseBoolean = (): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject) => {
//         const data: boolean = false;
//         if (data) {
//             resolve(data);
//         } else {
//             reject('No data found');
//         }
//     }
//     )
// }

// const getPromiseDataBoolean = async (): Promise<boolean> => {
//     const data = await makePromiseBoolean();
//     return data;
// }

// // type DataType = {
// //     data: string,
// // }
// interface DataType{
//     data: string,
// }


// const makePromiseObject = (): Promise<DataType> => {
//     return new Promise<DataType>((resolve, reject) => {
//         const data: DataType = { data: 'John'};
//         if (data) {
//             resolve(data);
//         } else {
//             reject('No data found');
//         }
//     }
//     )
// }

// const getPromiseDataObject = async (): Promise<DataType> => {
//     const data = await makePromiseObject();
//     return data;
// }


// // json placeholder 

// interface ITodo{
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean,
// }

// const getTodo = async(): Promise<ITodo>=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await response.json();
//     return data;
// }

// const getTodoData = async(): Promise<void>=>{
//     const data = await getTodo();
//     // return data;
//     console.log(data);
// }

// getTodoData();
