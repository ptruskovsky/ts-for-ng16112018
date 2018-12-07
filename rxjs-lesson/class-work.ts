// ReactiveX = observer + iterator
// Observable

// import { Observable, Subscriber } from 'rxjs';
// let count: number = 0;
// const sequence$: Observable<number> = Observable.create((obsever: Subscriber<number>) => {
//
//     // tslint:disable-next-line
//      setInterval(() => {
//         count++;
//         obsever.next(count);
//         // if (count === 5) {
//         //     obsever.error('some err');
//         //     clearInterval(interval);
//         // }
//     }, 1000);
// });
// sequence$.subscribe((v: number) => {
//     // tslint:disable-next-line
//     console.log(`Sub1 => ${v}`);
//     // tslint:disable-next-line
// }, (err: any) => {
//     // tslint:disable-next-line
//     console.log(err);
// }, () => {
//     // tslint:disable-next-line
//     console.log('completed');
// });
//
// setTimeout(() => {
//     sequence$.subscribe((v: number) => {
//         // tslint:disable-next-line
//         console.log(`Sub2 => ${v}`);
//         // tslint:disable-next-line
//     }, (err: any) => {
//         // tslint:disable-next-line
//         console.log(err);
//     }, () => {
//         // tslint:disable-next-line
//         console.log('completed');
//     });
// }


// MAP
// const sequence1$: Observable<number> = interval(1000);
//
// /*
//   sequence1$  ---0---1---2---3---
//                 map((x)=> x*2)
//   sequence2$  ---0---2---4---6---
//  */
//
// const sequence2$: Observable<number> = sequence1$.pipe(map((x: number) => x * 2));
// // tslint:disable-next-line
// sequence2$.subscribe((v: number) => console.log(v))


// // TAP
// const sequence1$: Observable<number> = interval(1000);
//
// /*
//   sequence1$  ---0---1---2---3---
//                 tap((x)=> x*2)
//   sequence2$  ---0---1---2---3---
//  */
//
// const sequence2$: Observable<number> = sequence1$.pipe(tap((x: number) => x * 2));
// // tslint:disable-next-line
// sequence2$.subscribe((v: number) => console.log(v))


// // TAKE , SKIP
// const sequence1$: Observable<number> = interval(1000);
//
// /*
//   sequence1$  --0--1--2--3--4--5--6--7--8--
//                  skip(5)
//                  take(3)
//   sequence2$  -----------------5--6--7|
//  */
//
// const sequence2$: Observable<number> = sequence1$.pipe(
//     skip(5),
//     take(3)
// );
// // tslint:disable-next-line
// sequence2$.subscribe((v: number) => console.log(v), () => {}, () => {console.log('completed')})

// CONCAT , SKIP


// /*
//   sequence1$  --0--1--2--3|
//   sequence2$  ----------------------7--8--9|
//                  concat
//   sequence2$  --0--1--2--3----------7--8--9|
//  */
// const sequence1$: Observable<number> = interval(1000).pipe(take(4));
// const sequence2$: Observable<number> = interval(1000).pipe(
//     skip(7),
//     take(3)
// );
// // tslint:disable-next-line
// sequence1$.pipe(concat(sequence2$)).subscribe((v: number) =>
// console.log(v), () => {}, () => {console.log('completed')})

// // MERGE -> or ||
// /*
//   sequence1$  ----0----1----2----3|
//   sequence2$  --0--1--2--3--4|
//                  merge
//   sequence2$  --0-01--21-3--(24)-3|
//  */
// const sequence1$: Observable<number> = interval(500)
//     .pipe(take(4));
// const sequence2$: Observable<number> = interval(300)
//     .pipe(
//         take(5)
//     );
// // tslint:disable-next-line
// sequence1$.pipe(merge(sequence2$))
// // tslint:disable-next-line
//     .subscribe((v: number) => console.log(v), () => {}, () => {console.log('completed')})

// combineLates -> and &&
/*
  sequence1$  ----0----1----2----3|
  sequence2$  --0--1--2--3--4|
                 combineLates((x,y)=>x+y)
  sequence2$  ----[0,0][0,1]--[0,2]-[1,2]-[1,3]--[2,3][2,4]--[3,4]|
 */
// const sequence1$: Observable<number> = interval(500)
//     .pipe(take(4));
// const sequence2$: Observable<number> = interval(300)
//     .pipe(
//         take(5)
//     );
// // tslint:disable-next-line
// sequence1$.pipe(combineLatest(sequence2$))
// // tslint:disable-next-line
//     .subscribe((v: number[]) => console.log(v), () => {
//     }, () => {
//         // tslint:disable-next-line
//         console.log('completed')
//     });

//
// export function onInput(event: KeyboardEvent): void {
//     const el: HTMLInputElement = event.target as HTMLInputElement;
//     const value = el.value;
// }

// const s1: Observable<number> = interval(1000);
//
// s1.subscribe(console.log);
//
// s1.pipe(take(5))
// // tslint:disable-next-line
//     .subscribe(console.log, () => {
//     }, () => {
//         // tslint:disable-next-line
//         console.log('complete')
//     });
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/from';
//
//
// Observable.of(1, 2, 3);

// import { interval, Observable, of } from 'rxjs';
// import { catchError, delay, map, retryWhen, zip } from 'rxjs/operators';
//
// const sequence$: Observable<string> = interval(500)
//     .pipe(zip<unknown, string>(of('a', 'b', 'c', 1, 's'), (_x: number, y: string) => y));
//
// const result$: Observable<string> = sequence$.pipe(
//     map((x: string) => x.toUpperCase())
// );
//
// result$
//     .pipe(
//         // tslint:disable-next-line
//         catchError((_err: any, _out: Observable<string>) => {
//             // console.log(_err);
//              return of('complete');
//         })
//         // retryWhen((errObs: Observable<string>) => errObs.pipe(delay(2000)))
//     )
//     .subscribe((v: string) => {
//         console.log(v);
//     });
