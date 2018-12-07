type primitive = string | number | boolean | null | undefined;
type sn = string | number;


function isInArray(array: primitive[], ...items: primitive[]): boolean {
    for (let i: number = 0; i < items.length; i++) {
        if (array.indexOf(items[i]) === -1) { return false; }
    }
    return true;
}

function summator(...items: sn[]): number {
    const numbers: number[] = items.map((item: primitive) => Number(item));
    return numbers.reduce((sum: number, num: number) => sum + num);
}

function getUnique(array: primitive[]): primitive[] {
    return array.map(((value: primitive, index: number) => array.indexOf(value) === index));
}

function toMatrix(array: primitive[], rowSize: number): primitive[][] {
    const isInt: boolean = Number.isInteger(rowSize);
    if (!isInt || rowSize < 1 ) { return []; }
    const result: primitive[][] = [];
    for (let i: number = 0; i < array.length; i++) {
        if (i % rowSize === 0) {
            result.push([array[i]]);
        } else {
            result[result.length - 1].push(array[i]);}
    }
    return result;
}

export {getUnique, summator, isInArray, toMatrix};
