import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import {  debounceTime, observeOn, switchMap } from 'rxjs/operators';
import { AirportResponseModel } from './AirportResponseModel';
import { AirportRequestModel } from './AirportRequestModel';
import { asap } from 'rxjs/internal/scheduler/asap';

const API_URL: string = 'https://form.flymerlin.by/publicapi/Form/GetAirportOrCity';
const ID_QUERY_CONTAINER: string = 'query';
const ID_RESULTS_CONTAINER: string = 'result';


function getInputElement(): HTMLInputElement | null {
    return document.getElementById(ID_QUERY_CONTAINER) as HTMLInputElement;
}

function getResultElement(): HTMLElement | null {
    return document.getElementById(ID_RESULTS_CONTAINER);
}

function clearResult(): void {
    const element: HTMLElement | null = getResultElement();
    if (element) {
        element.innerHTML = '';
    }
}

function createRequest(queryString: string): AirportRequestModel {
    const req: AirportRequestModel = new AirportRequestModel();
    req.queryString = queryString;
    req.langCode = 'ru';
    return req;
}

function urlFromRequest(request: AirportRequestModel): string {
    return API_URL + '?queryString=' + request.queryString + '&langCode=' + request.langCode;
}

function doRequest(queryString: string): Promise<AirportResponseModel[]> {
    clearResult();
    if (!queryIsValid(queryString)) {
        return new Promise<AirportResponseModel[]>((reject: Function) => {
            return reject();
        });
    }

    const request: AirportRequestModel = createRequest(queryString);
    const url: string = urlFromRequest(request);

    console.log('executing request: ' + request.queryString);

    return fetch(url).then((res: Response) => res.json());
}

function displayResult(result: AirportResponseModel[], container: HTMLElement | null): void {

    if (!result) {
        return;
    }

    const divs: string[] = result.map((model: AirportResponseModel) => {
       return `<div>${model.name} (${model.airportId === null ? 'город' : 'aэропорт'})</div>`;
    });

    if (container !== null && divs.length > 0) {
        container.insertAdjacentHTML('afterbegin', divs.reduce((a: string, b: string) => a + b, ''));
    }
}

function queryIsValid(queryString: string): boolean {
    if (!queryString) {
        return false;
    }
    if (queryString.trim().length < 3) {
        return false;
    }
    return true;
}

function inputIsValid(input: HTMLElement| null): boolean{
    return input !== null;
}


const inputElement: HTMLInputElement | null = getInputElement() as HTMLInputElement;
const resultElement: HTMLElement | null = getResultElement();


if (inputIsValid((inputElement)) && inputIsValid((resultElement))) {
    fromEvent(inputElement, 'input')
        .pipe(
            observeOn(asap),
            debounceTime(300),
            switchMap(() => doRequest(inputElement.value))
        )
        .subscribe((value: AirportResponseModel[]) => displayResult(value, resultElement));
}