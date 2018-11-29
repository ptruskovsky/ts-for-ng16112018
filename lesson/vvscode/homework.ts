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
