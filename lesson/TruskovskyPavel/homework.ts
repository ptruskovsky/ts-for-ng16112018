export type Primitive = string | number | boolean | null | undefined;
export type NumberString = string | number;

export class Homework {

   public isInArray(first: Primitive[], ...rest: Primitive[]): boolean {
      if (!first || !rest ) {
         return false;
      }
      return !rest.some( (item: Primitive) => {
         return !first.includes(item) ;
      });
   }

   public summator(...args: NumberString[]): number {
      let result: number = 0;
      args.forEach((arg: NumberString) => {
         result += (typeof arg === 'string') ? parseInt(arg) : arg;
      });
      return result;
   }

   public getUnique(...arr: Primitive[]): Primitive[] {
      const result: Primitive[] = [];
      arr.forEach((item: Primitive) => {
         if (!result.includes(item)) {
            result.push(item);
         }
      });
      return result;
   }

   public  toMatrix(data: Primitive[], rowSize: number): Primitive[][] {
      const result: Primitive[][] = [];
      for (let row: number = 0; row < rowSize; row++) {
         result.push(data);
      }
      return result;
   }
}

let hw: Homework = new Homework();

// unique
let unique: Primitive[] = hw.getUnique(1, 2 , '3', 7, 2, null, 4, 7, null, 1);
console.log(`Unique's result is:`);
unique.forEach((item: Primitive) => console.log(item));
console.log(`--------------`);

// summator
let summator: number = hw.summator(1, '2', '7', 15);
console.log(`summator's result is ${summator}`);
console.log(`--------------`);

// isInArray
let isInArray: boolean = hw.isInArray(['1', '2', '3'], '1', '2', '3');
console.log(`isInArray's result is ${isInArray}`);
console.log(`--------------`);

// toMatrix
let toMatrix: Primitive[][] = hw.toMatrix([1, 2, 3, null, undefined], 4);
console.log(`toMatrinx's result is:`);
toMatrix.forEach((row: Primitive[]) => {
   let rowValues: string = '';
   row.forEach((col: Primitive) => {
     rowValues += ' ' + col ;
   });
    console.log(`${rowValues}\r\n`);
});


