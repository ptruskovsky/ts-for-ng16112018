import { getUnique, isInArray, summator, toMatrix } from './homework';

describe('Test getUnique', () => {
    it('Should get unique primitives', () => {
        expect(getUnique([1, 1, '2', '2', null, undefined, true, true]))
            .toEqual([1, '2', null, undefined, true]);
    });
    it('Should get []]', () => {
        expect(getUnique([]))
            .toEqual([]);
    });
    it('Should get one value', () => {
        expect(getUnique([1, 1, 1, 1, 1, 1, 1, 1]))
            .toEqual([1]);
    });
});

describe('Test isInArray', () => {
    it('Should return true for 1 value', () => {
        expect(isInArray([1, 1, '2', '2', null, undefined, true, true], 1))
            .toEqual(true);
    });

    it('Should return true for several values', () => {
        expect(isInArray([1, 1, '2', '2', null, undefined, true, true], 1, '2', undefined, null, true))
            .toEqual(true);
    });

    it('Should return false for 1 value', () => {
        expect(isInArray([1, 1, '2', '2', null, undefined, true, true], false))
            .toEqual(false);
    });

    it('Should return false for several values', () => {
        expect(isInArray([1, 1, '2', '2', null, undefined, true, true], 1, 2))
            .toEqual(false);
    });

    it('Should return false for undefined', () => {
        expect(isInArray([1, 1, '2', '2'], undefined))
            .toEqual(false);
    });
});

describe('Test summator', () => {
    it('Should return 1 + 1 = 2', () => {
        expect(summator(1, 1)).toBe(2);
    });

    it('Should return number + valid string', () => {
        expect(summator(1, '1')).toBe(2);
    });

    it('Should return number + invalid string', () => {
        expect(summator(1, 'asd')).toEqual(NaN);
    });

    it('Should sum several valid values', () => {
        expect(summator(1, '123456789012345678901234567890', 1, 1)).toBe(123456789012345678901234567893);
    });
});

describe('Test toMatrix', () => {
    it('Should return matrix 2x2 of several types', () => {
        expect(toMatrix([1, null, '2', false], 2))
            .toEqual([[1, null], ['2', false]]);
    });
    it('Should return matrix 1x5', () => {
        expect(toMatrix([1, 2, 3, 4, 5], 5))
            .toEqual([[1, 2, 3, 4, 5]]);
    });
    it('Should return matrix for big rowSize', () => {
        expect(toMatrix([1, 2, 3, 4], 5))
            .toEqual([[1, 2, 3, 4]]);
    });
    it('Should return [] for non-positive rowSize]', () => {
        expect(toMatrix([1, null, '2', false], -1))
            .toEqual([]);
    });
    it('Should return [] for float rowSize]', () => {
        expect(toMatrix([1, null, '2', false], 4.4))
            .toEqual([]);
    });
});
