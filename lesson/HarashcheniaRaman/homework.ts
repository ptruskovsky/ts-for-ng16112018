// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.

function isInArray<T>(array: T[], ...arrayItems: T[]): boolean {
    return arrayItems.every((checkedItem: T) => array.some((originalItem: T) => originalItem === checkedItem));
}
//
// console.log(isInArray<number>([1, 2, 3], 3));

// 2)
// Написать функцию summator(), которая суммирует переданые ей аргументы.
//     Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
//

 type SummatorArgs = number | string;
//
function summator(...args: SummatorArgs[]): number {
    let sum: number = 0;
    args.map((item: SummatorArgs) => {
        typeof item === 'number' ? sum += item : sum += parseFloat(item);
    });
    return sum;
}

// console.log(summator(1, 2, '123.23'));

// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
//     в котором они встречаются в оригинальной структуре.

function getUnique<T>(...args: T[]): T[] {
    let result: T[] = [];
    args.map((item) => {
        if (result.filter((alreadyAddedItem) => alreadyAddedItem === item).length === 0) {
            result.push(item);
        }
    });
    return result;
}
//
// console.log(getUnique<string>('1', '1', '2', '2', '3'));

// 4)
// Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//     возвращает новый массив. Число показывает количество элементов в подмассивах,
//     элементы подмассивов беруться из массива data.
//     Оригинальный массив не должен быть изменен.

function toMatrix<T>(data: T[], rowSize: number): T[][] {
    const result: T[][] = [];
    for (let index: number = 0; index < data.length; index += rowSize) {
        result.push(data.slice(index, index + rowSize));
    }
    return result;
}

// console.log(toMatrix<number>([1, 2, 3, 4], 3));

