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

interface IAcc<MyType extends { name: string }> {
    info(): MyType;
}

let p2: IAcc<{ name: string, male: true }>;

let animation: 'easy-out' | 'easy-in';

animation = 'easy-out';
