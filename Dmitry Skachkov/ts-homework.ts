// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

type parameterType = string | number;

function isInArray(arr: string[], ...arg: string[]): boolean;
function isInArray(arr: number[], ...arg: number[]): boolean;
function isInArray(arr: parameterType[], ...arg: parameterType[]): boolean {
    return arg.every((item: parameterType): boolean => arr.includes(item));
}

// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function summator(...arg: parameterType[]): number {
    return arg.reduce((sum: number, item: parameterType): number => {
        const itemNumber: number = typeof item === 'string' ? parseInt(item) : item;
        if (isNaN(itemNumber)) {
            throw new Error(`Can not parse "${item}" to number!`);
        }
        return sum + itemNumber;
    }, 0);
}

// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

function getUnique(...arg: parameterType[]): parameterType[] {
    return Array.from(new Set(arg));
}

// 4)
//  Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//  возвращает новый массив. Число показывает количество элементов в подмассивах,
//  элементы подмассивов беруться из массива data.
//  Оригинальный массив не должен быть изменен.

function toMatrix(data: parameterType[], rowSize: number): parameterType[][] {
    const matrix: parameterType[][] = [];
    for (let index: number = 0; index < data.length; index += rowSize) {
        matrix.push(data.slice(index, index + rowSize));
    }
    return matrix;
}