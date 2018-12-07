import { isInArray, summator, getUnique, toMatrix } from './homework';

describe('isInArray', () => {
    it('should be in array', () => {
        expect(isInArray([1, 2, 3, 4, 54], 1, 2, 3, 4))
            .toBe(true);
        expect(isInArray([1, 2, 3, 4, 54], 54))
            .toBe(true);
        expect(isInArray([1, 2, 3, 4, 54], 1))
            .toBe(true);
        expect(isInArray([1, 2, 3, 4, 54, 'qwer'], 'qwer'))
            .toBe(true);
        expect(isInArray([1, 2, 3, 4, 54, 'qwer'], 1, 2, 3, 4, 54, 'qwer'))
            .toBe(true);
    });
    it('should not be in array', () => {
        expect(isInArray([1, 2, 3, 4, 54], -1))
            .toBe(false);
        expect(isInArray([1, 2, 3, 4, 54], 0))
            .toBe(false);
        expect(isInArray([1, 2, 3, 4, 54], 'a'))
            .toBe(false);
        expect(isInArray([1, 2, 3, 4, 54, 'qwer'], 'qwers'))
            .toBe(false);
        expect(isInArray([1, 2, 3, 4, 54, 'qwer'], 5, 'qwer'))
            .toBe(false);
    });
});
describe('summator', () => {
    it('should sum 65', () => {
        expect(summator(1, 2, 3, 4, 54, '1'))
            .toBe(65);
    });
    it('should sum 65.1', () => {
        expect(summator(1, 2, 3, 4, 54, '1.1'))
            .toBe(65.1);
    });
    it('should be 0', () => {
        expect(() => summator('a1', 'b2', 'c3', 'c4', 'd54', '-a1'))
            .toThrow('One of the values is not a number ' + 'a1');
    });
});

describe('getUnique', () => {
    it('should return [1,2,3,7]', () => {
        expect(getUnique(1, 2, 3, 3, 7, 1))
            .toEqual([1, 2, 3, 7]);
    });
    it('should return [1,2,3,7, \'a\']', () => {
        expect(getUnique(1, 2, 3, 3, 7, 1, 'a', 'a'))
            .toEqual([1, 2, 3, 7, 'a']);
    });
    it('should return []', () => {
        expect(getUnique())
            .toEqual([]);
    });
});

describe('toMatrix', () => {
    it('should transform to [[1,2],[3,7]]', () => {
        expect(toMatrix([1, 2, 3, 7], 2))
            .toEqual([[1, 2], [3, 7]]);
    });
});