// RUN: ./../../node_modules/.bin/karma start
//  export CHROME_BIN="/usr/bin/chromium-browser --no-sandbox"

import { Homework, NumberString, Primitive } from './homework';

const hw: Homework = new Homework();

describe('Homework class', () => {
    it('test unique method', () => {
        const input: Primitive[] = [1, 2 , '3', 7, 2, null, 4, 7, null, 1];
        const expected: Primitive[] = [1, 2 , '3', 7, null, 4];
        expect(hw.getUnique(...input)).toEqual(expected);
    });
    it('test summator method', () => {
        const input: NumberString[] = [1, '2', '7', 15];
        const expected: number = 25;
        expect(hw.summator(...input)).toEqual(expected);
    });
    it('test isInArray method case #1', () => {
        const input: Primitive[] = [1, 2 , 3];
        const expected: boolean = true;
        expect(hw.isInArray(input, ...input)).toBe(expected);
    });
    it('test isInArray method case #2', () => {
        const input: Primitive[] = [1, 2];
        const expected: boolean = false;
        expect(hw.isInArray(input, ...input, 4)).toBe(expected);
    });
    it('test toMatrix method case #1', () => {
        const input: Primitive[] = [1, 2, 3];
        const expected: Primitive[][] = [[1, 2, 3], [1 , 2, 3]];
        expect(hw.toMatrix(input, 2)).toEqual(expected);
    });
    it('test toMatrix method case #2', () => {
        const input: Primitive[] = [1, 2, 3];
        const expected: Primitive[][] = [[1, 2, 3], [1 , 2, 3], [1, 2, 3]];
        expect(hw.toMatrix(input, 3)).toEqual(expected);
    });
});