import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime, filter, observeOn, switchMap, tap } from 'rxjs/operators';
import { AirportResponseModel } from './AirportResponseModel';
import { asap } from 'rxjs/internal/scheduler/asap';

const API_URL: string = 'https://form.flymerlin.by/publicapi/Form/GetAirportOrCity';
const ID_QUERY_CONTAINER: string = 'query';
const ID_RESULTS_CONTAINER: string = 'result';

function doRequest(queryString: string): Promise<AirportResponseModel[]> {
    const url: string = API_URL + '?queryString=' + queryString + '&langCode=ru';
    console.log('executing request: ' + queryString);
    return fetch(url).then((res: Response) => res.json());
}

function displayResult(result: AirportResponseModel[], container: HTMLElement | null): void {
    if (!result || !container) {
        return;
    }
    const divs: string[] = result.map((model: AirportResponseModel) => {
       return `<div>${model.name} (${model.airportId === null ? 'город' : 'aэропорт'})</div>`;
    });
    container.insertAdjacentHTML('afterbegin', divs.reduce((a: string, b: string) => a + b, ''));
}

const inputElement: HTMLInputElement | null = document.getElementById(ID_QUERY_CONTAINER) as HTMLInputElement;
const resultElement: HTMLElement | null = document.getElementById(ID_RESULTS_CONTAINER);

fromEvent(inputElement, 'input')
    .pipe(
        observeOn(asap),
        debounceTime(300),
        filter(() => { return (inputElement !== null && resultElement !== null && !!inputElement.value
            && inputElement.value.trim().length > 2); }),
        tap(() => {if (resultElement) {resultElement.innerHTML = ''; } } ),
        switchMap(() => doRequest(inputElement.value))
    )
    .subscribe((value: AirportResponseModel[]) => displayResult(value, resultElement));