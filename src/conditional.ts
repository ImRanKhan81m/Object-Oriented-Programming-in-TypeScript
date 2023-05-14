// // a type is dependent on another type

// type a1 = string;
// type a2 = number;
// type a3 = undefined


// type b1 = a1 extends string ? number : boolean;

// // nested conditional types
//  type b2 = 
//  a1 extends string 
//  ? a2 extends number 
//  ? string : boolean 
//  : boolean 


// type Shekh ={
//     wife1: string;
//     wife2: string;
// }

// type A = keyof Shekh;

// type checkProperty<T, K> = K extends keyof Shekh ? true : false;

// type CheckWife1 = checkProperty<Shekh, 'wife1'>

// type Bandobi = 'Monika' | 'Rita' | 'Rina' | 'Rima'

// type RemoveBandobi <T, K> = T extends K ? never : T;

// type CurrentBandobi = RemoveBandobi<Bandobi, 'Monika'>