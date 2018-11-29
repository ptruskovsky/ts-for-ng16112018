/*
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
*/
function isInArray<T>(list: T[], ...params: T[]): boolean {
  // тут вопрос - зачем мне явно указывать тип `el`, если его можно вывести?
  return params.every((el: T) => list.includes(el));
}

/*
 Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
*/
function summator(...params: (string | number)[]): number {
  return params.reduce((acc: number, el: string | number) => {
    let num: number;
    if (typeof el === 'string') {
      num = parseInt(el, 10);
    } else {
      num = el;
    }
    return acc + num;
  }, 0);
}

/*
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.
*/
/* tslint:disable no-any */
function getUnique(list: any[]): any[] {
  return Array.from(
    list.reduce((acc: Set<any>, el: any) => {
      acc.add(el);
      return acc;
    }, new Set()),
  );
}
/* tslint:enable no-any */
