export function sum(a: number, _b: number): number {
    return a + _b;
}

type sn = string | number;

function isNumber(v: sn): v is number {
    return typeof v === 'number';
}

export function isInArray(array: sn[], ...values: sn[]): boolean {
    return values.every((v: sn) => array.indexOf(v) !== -1);
}

export function summator(...values: sn[]): number {
    return Number(values.reduce((acc: number, current: sn): number => {
        const num: number = isNumber(current) ? current : Number(current);
        if (Number.isNaN(num)) {
            throw 'One of the values is not a number ' + current;
        }
        return acc + num;
    }, 0));
}

export function getUnique(...values: sn[]): sn[] {
    return Array.from(new Set(values));
}

export function toMatrix(data: sn[], rowSize: number): sn[][] {
    const result: sn[][] = [];
    for (let i: number = 0; i < data.length; i += rowSize) {
        result.push(data.slice(i, i + rowSize));
    }
    return result;
}
