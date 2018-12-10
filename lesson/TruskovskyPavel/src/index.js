"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fromEvent_1 = require("rxjs/internal/observable/fromEvent");
var operators_1 = require("rxjs/operators");
var AirportRequestModel_1 = require("./AirportRequestModel");
var API_URL = 'http://form.merlinticket.by/publicapi/Form/GetAirportOrCity';
var testRequest = new AirportRequestModel_1.AirportRequestModel();
testRequest.queryString = 'Бори';
function urlFromRequest(request) {
    return API_URL + '?queryString=' + request.queryString + '&langCode=' + request.langCode;
}
var btnClicks$ = fromEvent_1.fromEvent(document, 'click');
function doRequest(request) {
    var url = urlFromRequest(request);
    return fetch(url).then(function (res) { return res.json(); });
}
btnClicks$.pipe(operators_1.switchMap(function () { return doRequest(testRequest); }, function (_click, res) {
    return res.map(function (item) { return item.name; });
}))
    .subscribe(function (val) {
    val.forEach(function (a) { return console.log(a); });
});
