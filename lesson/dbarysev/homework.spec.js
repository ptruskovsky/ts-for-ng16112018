"use strict";
exports.__esModule = true;
var homework_1 = require("./homework");
describe('My function', function () {
    it('test sum function ', function () {
        expect(homework_1.sum(1, 2))
            .toBe(3);
    });
});
