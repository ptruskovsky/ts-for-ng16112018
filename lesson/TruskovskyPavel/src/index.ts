import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime, filter, observeOn, switchMap, tap } from 'rxjs/operators';
import { AirportResponseModel } from './AirportResponseModel';
import { asap } from 'rxjs/internal/scheduler/asap';

const API_URL: string = 'https://form.flymerlin.by/publicapi/Form/GetAirportOrCity';
const ID_QUERY_CONTAINER: string = 'query';
const ID_RESULTS_CONTAINER: string = 'result';
const inputElement: HTMLInputElement | null = document.getElementById(ID_QUERY_CONTAINER) as HTMLInputElement;
const resultElement: HTMLElement | null = document.getElementById(ID_RESULTS_CONTAINER);

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

fromEvent(inputElement, 'input')
    .pipe(
        observeOn(asap),
        debounceTime(300),
        filter(() => !!inputElement && !!inputElement.value && inputElement.value.length > 2),
        tap(() => !!resultElement ? resultElement.innerHTML = '' : ''),
        switchMap(() => doRequest(inputElement.value))
    ).subscribe(render);