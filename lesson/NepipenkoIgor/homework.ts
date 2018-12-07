//1
type sn = string | number;

export function isInArray(param1: sn[], ...param2: sn[]): boolean {
    const argsLen: number = param2.length;
    for (let i: number = argsLen - 1; i >= 0; i--) {
        if (!(param1.indexOf(param2[i]) + 1)) {
            return false;
        }
    }
    return true;
}

// console.log(isInArray([1, 2, 3, 5, 'qwe'], 1, 2, 3, 5, 'qwe')); //true

//2
export function summator(...param: sn[]): number {
    return param.reduce((accumulator: number, currentValue: number | string): number => {
        accumulator += typeof currentValue === 'string'
            ? parseFloat(currentValue)
            : currentValue;
        return accumulator;
    }, 0);
}

//
// console.log(summator(1, 2, '3')); //6

//3
export function getUnique(...arr: sn[]): sn[] {
    return [...new Set(arr)];
}

//
// console.log(getUnique(1, 2, 'we', 1, 'we', 'rrr')); //[1, 2, 'we', 'rrr']

//4
// function toMatrix (data: any[], rowSize: number): any[]{
//     return [];
// }

export function sum(a: number, _b: number): number {
    return a + _b;
}

