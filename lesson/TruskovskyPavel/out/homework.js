"use strict";
var Homework = /** @class */ (function () {
    function Homework() {
    }
    Homework.prototype.isInArray = function (first) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        if (!first || !rest) {
            return false;
        }
        return !rest.some(function (item) {
            return !first.includes(item);
        });
    };
    Homework.prototype.summator = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = 0;
        args.forEach(function (arg) {
            result += (typeof arg === 'string') ? parseInt(arg) : arg;
        });
        return result;
    };
    Homework.prototype.getUnique = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        var result = [];
        arr.forEach(function (item) {
            if (!result.includes(item)) {
                result.push(item);
            }
        });
        return result;
    };
    Homework.prototype.toMatrix = function (data, rowSize) {
        var result = [];
        for (var row = 0; row < rowSize; row++) {
            result.push(data);
        }
        return result;
    };
    return Homework;
}());
var hw = new Homework();
// unique
var unique = hw.getUnique(1, 2, '3', 7, 2, null, 4, 7, null, 1);
console.log("Unique's result is:");
unique.forEach(function (item) { return console.log(item); });
console.log("--------------");
// summator
var summator = hw.summator(1, '2', '7', 15);
console.log("summator's result is " + summator);
console.log("--------------");
// isInArray
var isInArray = hw.isInArray(['1', '2', '3'], '1', '2', '3');
console.log("isInArray's result is " + isInArray);
console.log("--------------");
// toMatrix
var toMatrix = hw.toMatrix([1, 2, 3, null, undefined], 4);
console.log("toMatrinx's result is:");
toMatrix.forEach(function (row) {
    var rowValues = '';
    row.forEach(function (col) {
        rowValues += ' ' + col;
    });
    console.log(rowValues + "\r\n");
});
//# sourceMappingURL=homework.js.map