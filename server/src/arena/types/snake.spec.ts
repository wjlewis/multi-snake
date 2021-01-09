import { Snake } from './snake';
import { Position } from './position';
import { Link } from './link';
import { Direction } from './direction';

describe('Snake', () => {
  describe('goForward', () => {
    it('Updates the snake accordingly (simple)', () => {
      const s = new Snake('0', new Position(0, 0), [
        new Link(Direction.North, 1),
      ]);

      expect(s.goForward()).toEqual(
        new Snake('0', new Position(0, -1), [new Link(Direction.North, 1)]),
      );
    });

    it('Updates the snake accordingly (complex)', () => {
      const s = new Snake('0', new Position(0, 0), [
        new Link(Direction.West, 3),
        new Link(Direction.South, 2),
        new Link(Direction.East, 2),
      ]);

      expect(s.goForward()).toEqual(
        new Snake('0', new Position(-1, 0), [
          new Link(Direction.West, 4),
          new Link(Direction.South, 2),
          new Link(Direction.East, 1),
        ]),
      );
    });

    it('Updates the snake accordingly (removing the final link if necessary)', () => {
      const s = new Snake('0', new Position(0, 0), [
        new Link(Direction.South, 4),
        new Link(Direction.East, 1),
      ]);

      expect(s.goForward()).toEqual(
        new Snake('0', new Position(0, 1), [new Link(Direction.South, 5)]),
      );
    });
  });

  describe('turnLeft', () => {
    it('Updates the snake accordingly (simple)', () => {
      const s = new Snake('0', new Position(0, 0), [
        new Link(Direction.North, 1),
      ]);

      expect(s.turnLeft()).toEqual(
        new Snake('0', new Position(-1, 0), [new Link(Direction.West, 1)]),
      );
    });

    it('Updates the snake accordingly (complex)', () => {
      const s = new Snake('0', new Position(0, 0), [
        new Link(Direction.West, 3),
        new Link(Direction.South, 2),
        new Link(Direction.East, 2),
      ]);

      expect(s.turnLeft()).toEqual(
        new Snake('0', new Position(0, 1), [
          new Link(Direction.South, 1),
          new Link(Direction.West, 3),
          new Link(Direction.South, 2),
          new Link(Direction.East, 1),
        ]),
      );
    });

    it('Updates the snake accordingly (removing the final link if necessary)', () => {
      const s = new Snake('0', new Position(0, 0), [
        new Link(Direction.South, 4),
        new Link(Direction.East, 1),
      ]);

      expect(s.turnLeft()).toEqual(
        new Snake('0', new Position(1, 0), [
          new Link(Direction.East, 1),
          new Link(Direction.South, 4),
        ]),
      );
    });
  });

  describe('turnRight', () => {
    it('Updates the snake accordingly (simple)', () => {
      const s = new Snake('0', new Position(0, 0), [
        new Link(Direction.North, 1),
      ]);

      expect(s.turnRight()).toEqual(
        new Snake('0', new Position(1, 0), [new Link(Direction.East, 1)]),
      );
    });

    it('Updates the snake accordingly (complex)', () => {
      const s = new Snake('0', new Position(0, 0), [
        new Link(Direction.West, 3),
        new Link(Direction.South, 2),
        new Link(Direction.East, 2),
      ]);

      expect(s.turnRight()).toEqual(
        new Snake('0', new Position(0, -1), [
          new Link(Direction.North, 1),
          new Link(Direction.West, 3),
          new Link(Direction.South, 2),
          new Link(Direction.East, 1),
        ]),
      );
    });

    it('Updates the snake accordingly (removing the final link if necessary)', () => {
      const s = new Snake('0', new Position(0, 0), [
        new Link(Direction.South, 4),
        new Link(Direction.East, 1),
      ]);

      expect(s.turnRight()).toEqual(
        new Snake('0', new Position(-1, 0), [
          new Link(Direction.West, 1),
          new Link(Direction.South, 4),
        ]),
      );
    });
  });
});
