import { lasts } from './index';

describe('tools', () => {
  describe('lasts', () => {
    it('Collects the last elements of their kinds', () => {
      const xs = [
        { kind: 0, value: 'a' },
        { kind: 0, value: 'b' },
        { kind: 7, value: 'c' },
        { kind: 4, value: 'd' },
        { kind: 3, value: 'e' },
        { kind: 4, value: 'f' },
        { kind: 1, value: 'g' },
      ];

      expect(lasts(xs, (x, y) => x.kind === y.kind)).toEqual([
        { kind: 0, value: 'b' },
        { kind: 7, value: 'c' },
        { kind: 3, value: 'e' },
        { kind: 4, value: 'f' },
        { kind: 1, value: 'g' },
      ]);
    });
  });
});
