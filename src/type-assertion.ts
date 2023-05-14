
let emni: any

emni = "Next level web development";

(emni as string).length;
<string>emni.length

function kgToGram(param: string | number) : string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The Converted value is ${value} gram`
    }

    if(typeof param === 'number') {
        const value = param * 1000;
        return `The Converted value is ${value} gram`
    }
}

const resultToBeNumber = kgToGram(10) as number;
const resultToBeString = <string>kgToGram('10');


type CustomErrorType ={
    message: string;
}


try{

}catch(err){
    console.log(( err as CustomErrorType).message);
}