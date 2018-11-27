// interface IAccount {
//     name:string;
//     age: number;
// }
//
// let person = IAccount

// let account = {
//     name: 'Igor',
//     age: 32
// }
//
// let p1: typeof account;
// p1 = {
//     name: 'Igor',
//     age: 32
// };
//
// class A {
//
// }
//
// let p2: A;

// let a: string;
// let b: number = 1;
// let c = true;
// c = false;

// let b: number | boolean | string |symbol | undefined | null;

// let age: number ;
// age = 1;
// age = undefined;


// function fn(): void {
// }
// let a: void = undefined;

// const account: {
//     readonly name: string,
//     readonly  age: number
// } = {
//     name: 'Igor',
//     age: 32,
// };
//
// account.age = 21;

// let arr: ReadonlyArray<number> = [1, 2];
// arr[100] = 2;
// arr.push(1);
// const account: {
//     name: string,
//     age: number
// }

// let cb: {
//     prototype: any,
//     new(url: string),
// };

// let obj: { [userInfo: string]: number } = {
//     'igor': 1
// };
//
// type MyAccount = {
//     name: string,
//     age: number
// };
//
// let account: MyAccount;
//
// let person: Partial<MyAccount>;

// interface IAccount {
//     age: number;
// }
//
// class Acc implements IAccount {
//     public age: number = 1;
// }

// type Name = {
//     name: string
// };
//
// interface IAge {
//     age: number;
// }
//
// interface IAcc extends IAge, Name {
//
// }
//
// let acc: IAcc = {
//     name: 'Igor',
//     age: 32
// }

// interface IAge {
//     age: number;
// }
//
// interface IAge {
//     name: string;
// }

// interface IAcc<MyType extends { name: string }> {
//     info(): MyType;
// }
//
// let p2: IAcc<{ name: string, male: true }>;
//
// let animation: 'easy-out' | 'easy-in';
//
// animation = 'easy-out';
// function b(): never {
//     throw new Error('some error');
// }

// function average(a: number, b: number, c: number): string {
//     const total: number = a + b + c;
//     const result: number = total / 3;
//     return `Avarage is ${result}`;
// }
//
// const s: number = average(1, 2, 3);
// average(1, 2);
// average(1, 2, 's');


// function average(a: number, b?: number, c?: number): string {
//     if (typeof b === 'undefined') {
//         b = 0;
//     }
//     if (typeof c === 'undefined') {
//         c = 0;
//     }
//     const total: number = a + b + c;
//     const result: number = total / 3;
//     return `Avarage is ${result}`;
// }
//
// const s: number = average(1, 2, 3);
// average(1);
// average(1, 2);
// average(1, 2, 's');

//
// function average(a: number, b: number = 0, cb: Function = () => {}): string {
//     const total: number = a + b + c;
//     const result: number = total / 3;
//     return `Avarage is ${result}`;
//     cb();
// }
//
// const s: number = average(1, 2, 3);
// average(1);
// average(1, 2);
// average(1, 2, 's');

// function average(...a: number[]): string {
//     const [b, c, d] = a;
//     const total: number = b + c + d;
//     const result: number = total / 3;
//     return `Avarage is ${result}`;
// }
//
// const s: number = average(1, 2, 3);
// average(1);
// average(1, 2);
// average(1, 2, 's');
// type sn = number | string;
//
//
// function isString(v: sn): v is string {
//     return typeof v === 'string';
// }
//
// function average(a: number, b: number): string;
// function average(a: string, b: number, c: number): string;
// function average(a: number, b: string): number;
// function average(a: sn, b: sn, c?: number): sn {
//     if (isString(a)) {
//         a.
//     } else {
//         a.
//     }
//     a.
//     total: number = parseInt(a);
// }
//
// average(1, 2);
// average('1', 2, 2);
// average('1', '2', 2);
// average(1, '2', 2);
// average(1, '2');
// parseInt()

// class Point {
//
//
//     public constructor(
//         public readonly x: number,
//         protected y: number,
//         private z: number
//     ) {
//
//     }
//
//     public sum(): number {
//         return this.x + this.y + this.z;
//     }
// }
//
// const p: Point = new Point(1, 2, 3);
//
//
// class P extends Point {
//     public constructor(x: number, y: number, z: number) {
//         super(x, y, z);
//         this.
//     }
// }


// class Singleton {
//     private static instance: Singleton;
//
//     private constructor() {}
//
//     public static getInstance(): Singleton {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();
//         }
//
//         return Singleton.instance;
//     }
// }
//
// const instance1: Singleton = Singleton.getInstance();
// const instance2: Singleton = Singleton.getInstance();
// const instance3: Singleton = Singleton.getInstance();

// interface IX {
//     x: number;
// }
//
// interface IY {
//     x: string;
// }
//
// class Point implements IX, IY {
//     public x!: number | string;
// }

//
// class Point implements IX, IY {
//     public x!: number;
//     public y!: number;
// }
//
// abstract class AbstractPoint {
//     public x: number = 0;
//     public abstract y: number;
//
//     public abstract sum(): number;
//
//     public getX(): number {
//         return this.x;
//     }
// }
//
// class Point1 extends AbstractPoint {
//     public y: number = 2;
//
//     public sum(): number {
//         return 2;
//     }
// }

// class Point {
//     private _x!: number;
//
//     public get x(): number {
//         return this._x;
//     }
//
//     public set x(v: number) {
//         this._x = v;
//     }
// }

class MathLib {
    @logMethod
    public areaOfCircle(r: number): number {
        return Math.PI * r ** 2;
    }
}

function logMethod(_target: Object, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalDescriptorValue: Function = descriptor.value;
    return {
        ...descriptor,
        // tslint:disable-next-line
        value: (...args: any[]) => {
            // tslint:disable-next-line
            const b = args.map((v: any) => JSON.stringify(v))
                .join();
            // tslint:disable-next-line
            const result = originalDescriptorValue(...args);
            // tslint:disable-next-line
            const r = JSON.stringify(result);
            // tslint:disable-next-line
            console.log(`Call: ${key}(${b})=>${r}`);
            return result;
        }
    };
}

let m: MathLib = new MathLib();

m.areaOfCircle(10);
m.areaOfCircle(2);
m.areaOfCircle(104);