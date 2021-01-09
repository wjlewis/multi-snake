import { Direction } from './direction';

export class Link {
  constructor(public direction: Direction, public length: number) {}

  extend(): Link {
    return new Link(this.direction, this.length + 1);
  }

  contract(): Link {
    return new Link(this.direction, this.length - 1);
  }
}
