"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fromEvent_1 = require("rxjs/internal/observable/fromEvent");
var operators_1 = require("rxjs/operators");
var AirportRequestModel_1 = require("./AirportRequestModel");
var asap_1 = require("rxjs/internal/scheduler/asap");
var API_URL = 'http://form.merlinticket.by/publicapi/Form/GetAirportOrCity';
var ID_QUERY_CONTAINER = 'query';
var ID_RESULTS_CONTAINER = 'result';
function getInputElement() {
    return document.getElementById(ID_QUERY_CONTAINER);
}
function getResultElement() {
    return document.getElementById(ID_RESULTS_CONTAINER);
}
function clearResult() {
    var element = getResultElement();
    if (element) {
        element.innerHTML = '';
    }
}
function createRequest(queryString) {
    var req = new AirportRequestModel_1.AirportRequestModel();
    req.queryString = queryString;
    req.langCode = 'ru';
    return req;
}
function urlFromRequest(request) {
    return API_URL + '?queryString=' + request.queryString + '&langCode=' + request.langCode;
}
function doRequest(queryString) {
    if (!queryIsValid(queryString)) {
    }
    var request = createRequest(queryString);
    var url = urlFromRequest(request);
    console.log('executing request: ' + request.queryString);
    return fetch(url).then(function (res) { return res.json(); });
}
function displayResult(result, container) {
    var divs = result.map(function (model) {
        return "<div>" + model.name + " (" + (model.airportId === null ? 'город' : 'aэропорт') + ")</div>";
    });
    if (container !== null) {
        container.append.apply(container, __spread(divs));
    }
}
function queryIsValid(queryString) {
    if (!queryString) {
        return false;
    }
    if (queryString.trim().length < 3) {
        return false;
    }
    return true;
}
function inputIsValid(input) {
    return input !== null;
}
var inputElement = getInputElement();
var resultElement = getResultElement();
clearResult();
var doQuery = inputIsValid(inputElement) && inputIsValid(resultElement) && queryIsValid(inputElement.value);
console.log(doQuery);
if (doQuery) {
    fromEvent_1.fromEvent(inputElement, 'input')
        .pipe(operators_1.observeOn(asap_1.asap), operators_1.debounceTime(400), operators_1.switchMap(function () { return doRequest(inputElement.value); }))
        .subscribe(function (value) { return displayResult(value, resultElement); });
}
