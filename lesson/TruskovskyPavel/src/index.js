"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fromEvent_1 = require("rxjs/internal/observable/fromEvent");
var operators_1 = require("rxjs/operators");
var asap_1 = require("rxjs/internal/scheduler/asap");
var API_URL = 'https://form.flymerlin.by/publicapi/Form/GetAirportOrCity';
var ID_QUERY_CONTAINER = 'query';
var ID_RESULTS_CONTAINER = 'result';
var inputElement = document.getElementById(ID_QUERY_CONTAINER);
var resultElement = document.getElementById(ID_RESULTS_CONTAINER);
function doRequest(queryString) {
    console.log('executing request: ' + queryString);
    return fetch(API_URL + '?queryString=' + queryString + '&langCode=ru').then(function (res) { return res.json(); });
}
function render(response) {
    if (!response || !resultElement) {
        return;
    }
    var divs = response.map(function (model) {
        return "<div>" + model.name + " (" + (model.airportId === null ? 'город' : 'aэропорт') + ")</div>";
    });
    resultElement.insertAdjacentHTML('afterbegin', divs.reduce(function (a, b) { return a + b; }, ''));
}
// requestResultSource$: Promise<AirportResponseModel[]>
function run(result, eventSource$, dataRequestFunction) {
    return eventSource$
        .pipe(operators_1.observeOn(asap_1.asap), operators_1.debounceTime(300), operators_1.filter(function (x) { return !!x.target &&
        !!x.target.value && x.target.value.length > 2; }), operators_1.tap(function () { return !!result ? result.innerHTML = '' : ''; }), operators_1.tap(function (x) { return console.log('input value: ' + x.target.value); }), operators_1.switchMap(function (x) { return dataRequestFunction(x.target.value); }));
}
run(resultElement, fromEvent_1.fromEvent(inputElement, 'input'), doRequest).subscribe(render);
