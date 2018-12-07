import { from } from 'rxjs';
import { map, observeOn } from 'rxjs/operators';
import { asap } from 'rxjs/internal/scheduler/asap';

console.log('hi all');

// const sequence1$: Observable<number> = interval(1000).pipe(take(5));
//
// sequence1$.pipe(
//     mergeMap(() => of(1, 2)),
//     // tslint:disable-next-line
// ).subscribe((v: any) => {
//     // tslint:disable-next-line
//     console.log(v);
// });
// const clickObservable$ = fromEvent(document, 'click');
//
// // tslint:disable-next-line
// function performRequest(): any {
//     return fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then(((res: Response) => res.json()));
// }
//
// clickObservable$
//     .pipe(
//         // tslint:disable-next-line
//         switchMap(() => performRequest(), (_click: Event, res: any) => res.email)
//     ).subscribe((email: string) => {
//     console.log(email);
// });

// Observable + observer = subject;

// const controlSequence$$: ReplaySubject<number> = new ReplaySubject(2);
// controlSequence$$.next(1);
// controlSequence$$.next(2);
// controlSequence$$.next(3);
// controlSequence$$.next(4);
// controlSequence$$.next(5);
//
// controlSequence$$.subscribe((value: number) => {
//     console.log(1, value);
// })

// controlSequence$$.next(6);
// controlSequence$$.next(7);
// controlSequence$$.next(8);

// controlSequence$$.complete();
//

// setTimeout(() => {
//     controlSequence$$.subscribe((value: number) => {
//         console.log(2, value);
//     });
// }, 5000)
// const controlSequence$$: Subject<number> = new Subject();

// const connectableObservable$: ConnectableObservable<number> = interval(1000)
//     .pipe(
//         publish()
//     ) as ConnectableObservable<number>;
//
// connectableObservable$.connect();
//
// connectableObservable$.subscribe((value: number) => {
//     console.log(`Sub 1 =>>>`, value);
// });
//
// setTimeout(() => {
//     connectableObservable$.subscribe((value: number) => {
//         console.log(`Sub 2 =>>>`, value);
//     });
// }, 5000);
const arr: number [] = [];
for (let i: number = 0; i < 10000; i++) {
    arr.push(i);
}
console.log('Start');
console.time('Schedule');
from(arr).pipe(
    observeOn(asap),
    map((v: number) => v * 2 % 3)
).subscribe(() => {
}, () => {
}, () => {
    console.timeEnd('Schedule');
});
console.log('End');