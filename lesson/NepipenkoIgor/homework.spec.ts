import { sum } from './homework';

describe('My function', () => {
    it('test sum function ', () => {
        expect(sum(1, 2))
            .toBe(3);
    });
});