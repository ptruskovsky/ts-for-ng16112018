import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { switchMap } from 'rxjs/operators';
import { AirportResponseModel } from './AirportResponseModel';
import { AirportRequestModel } from './AirportRequestModel';
import { Observable } from 'rxjs/internal/Observable';


const API_URL: string = 'http://form.merlinticket.by/publicapi/Form/GetAirportOrCity';
const testRequest: AirportRequestModel = new AirportRequestModel();
testRequest.queryString = 'Бори';

function urlFromRequest(request: AirportRequestModel): string {
    return API_URL + '?queryString=' + request.queryString + '&langCode=' + request.langCode;
}

const btnClicks$: Observable<Event> = fromEvent(document, 'click');

function doRequest(request: AirportRequestModel): Promise<AirportResponseModel[]> {
    const url: string = urlFromRequest(request);
    return fetch(url).then((res: Response) => res.json());
}


btnClicks$.pipe(
    switchMap(() => doRequest(testRequest), (_click: Event, res: AirportResponseModel[]) =>
    res.map((item: AirportResponseModel) =>  item.name )))
    .subscribe((val: (string | null)[]) => {
    val.forEach((a: string | null) => console.log(a));
});
