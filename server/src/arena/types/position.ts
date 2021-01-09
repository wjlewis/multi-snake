export class Position {
  constructor(public x: number, public y: number) {}

  add(pos: Position): Position {
    return new Position(this.x + pos.x, this.y + pos.y);
  }
}
