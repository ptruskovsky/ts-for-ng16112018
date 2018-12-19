import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime, filter, observeOn, switchMap, tap } from 'rxjs/operators';
import { AirportResponseModel } from './AirportResponseModel';
import { asap } from 'rxjs/internal/scheduler/asap';
import { Observable } from 'rxjs';

const API_URL: string = 'https://form.flymerlin.by/publicapi/Form/GetAirportOrCity';
const ID_QUERY_CONTAINER: string = 'query';
const ID_RESULTS_CONTAINER: string = 'result';
const inputElement: HTMLInputElement | null = document.getElementById(ID_QUERY_CONTAINER) as HTMLInputElement;
const resultElement: HTMLElement | null = document.getElementById(ID_RESULTS_CONTAINER) as HTMLElement;

function doRequest(queryString: string): Promise<AirportResponseModel[]> {
    console.log('executing request: ' + queryString);
    return fetch(API_URL + '?queryString=' + queryString + '&langCode=ru').then((res: Response) => res.json());
}

function render(response: AirportResponseModel[]): void {
    if (!response || !resultElement) {
        return;
    }
    const divs: string[] = response.map((model: AirportResponseModel) => {
        return `<div>${model.name} (${model.airportId === null ? 'город' : 'aэропорт'})</div>`;
    });
    resultElement.insertAdjacentHTML('afterbegin', divs.reduce((a: string, b: string) => a + b, ''));
}

// requestResultSource$: Promise<AirportResponseModel[]>
function run(result: HTMLElement, eventSource$: Observable<Event>,  dataRequestFunction: Function):
    Observable<AirportResponseModel[]> {
    return eventSource$
        .pipe(
            observeOn(asap),
            debounceTime(300),
            filter((x: Event) => !!(x.target as HTMLInputElement) &&
                !!(x.target as HTMLInputElement).value && (x.target as HTMLInputElement).value.length > 2),
            tap(() => !!result ? result.innerHTML = '' : ''),
            tap( (x: Event) => console.log('input value: ' + (x.target as HTMLInputElement).value)),
            switchMap((x: Event) => dataRequestFunction((x.target as HTMLInputElement).value))
        );
}

run(
    resultElement,
    fromEvent(inputElement, 'input'),
    doRequest
).subscribe(render);
