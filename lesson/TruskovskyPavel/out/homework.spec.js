"use strict";
// RUN: ./../../node_modules/.bin/karma start
//  export CHROME_BIN="/usr/bin/chromium-browser --no-sandbox"
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
var homework_1 = require("./homework");
var hw = new homework_1.Homework();
describe('Homework class', function () {
    it('test unique method', function () {
        var input = [1, 2, '3', 7, 2, null, 4, 7, null, 1];
        var expected = [1, 2, '3', 7, null, 4];
        expect(hw.getUnique.apply(hw, __spread(input))).toEqual(expected);
    });
    it('test summator method', function () {
        var input = [1, '2', '7', 15];
        var expected = 25;
        expect(hw.summator.apply(hw, __spread(input))).toEqual(expected);
    });
    it('test isInArray method case #1', function () {
        var input = [1, 2, 3];
        var expected = true;
        expect(hw.isInArray.apply(hw, __spread([input], input))).toBe(expected);
    });
    it('test isInArray method case #2', function () {
        var input = [1, 2];
        var expected = false;
        expect(hw.isInArray.apply(hw, __spread([input], input, [4]))).toBe(expected);
    });
    it('test toMatrix method case #1', function () {
        var input = [1, 2, 3];
        var expected = [[1, 2, 3], [1, 2, 3]];
        expect(hw.toMatrix(input, 2)).toEqual(expected);
    });
    it('test toMatrix method case #2', function () {
        var input = [1, 2, 3];
        var expected = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
        expect(hw.toMatrix(input, 3)).toEqual(expected);
    });
});
//# sourceMappingURL=homework.spec.js.map