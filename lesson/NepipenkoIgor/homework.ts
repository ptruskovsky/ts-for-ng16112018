function isInArray (param1: any[], ...param2: any[]): boolean {
    const argsLen: number = param2.length;
    for(let i: number = argsLen-1; i >= 0; i-- ){
        if(!(param1.indexOf(param2[i])+1)){
            return false;
        }
    }
    return true;
}
console.log(isInArray([1, 2, 3, 5, 'qwe'], 1, 2, 3, 5, 'qwe'));

function summator () {}