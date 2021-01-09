import { Link } from './link';
import { Position } from './position';
import { replaceAt } from '../../tools';
import { ActionDirection } from './action-direction';
import { Direction } from './direction';

export class Snake {
  constructor(
    public handle: string,
    public head: Position,
    public links: Link[],
  ) {}

  goForward(): Snake {
    const head = this.computeNewHead(ActionDirection.Forward);
    const extendedLinks = replaceAt(0, link => link.extend(), this.links);
    const links = this.contractTail(extendedLinks);

    return new Snake(this.handle, head, links);
  }

  turnLeft(): Snake {
    const head = this.computeNewHead(ActionDirection.Left);
    const movementDir = this.links[0].direction;
    const firstLink = new Link(
      this.transformDir(ActionDirection.Left, movementDir),
      1,
    );
    const extendedLinks = [firstLink, ...this.links];
    const links = this.contractTail(extendedLinks);

    return new Snake(this.handle, head, links);
  }

  turnRight(): Snake {
    const head = this.computeNewHead(ActionDirection.Right);
    const movementDir = this.links[0].direction;
    const firstLink = new Link(
      this.transformDir(ActionDirection.Right, movementDir),
      1,
    );
    const extendedLinks = [firstLink, ...this.links];
    const links = this.contractTail(extendedLinks);

    return new Snake(this.handle, head, links);
  }

  private contractTail(links: Link[]): Link[] {
    const contracted = replaceAt(
      links.length - 1,
      link => link.contract(),
      links,
    );
    return contracted.filter(link => link.length > 0);
  }

  private computeNewHead(actionDir: ActionDirection): Position {
    const movementDir = this.links[0].direction;
    return this.head.add(this.computeHeadAddend(actionDir, movementDir));
  }

  private computeHeadAddend(
    actionDir: ActionDirection,
    movementDir: Direction,
  ): Position {
    switch (this.transformDir(actionDir, movementDir)) {
      case Direction.North:
        return new Position(0, -1);
      case Direction.South:
        return new Position(0, 1);
      case Direction.East:
        return new Position(1, 0);
      case Direction.West:
        return new Position(-1, 0);
    }
  }

  private transformDir(actionDir: ActionDirection, dir: Direction): Direction {
    switch (dir) {
      case Direction.North:
        switch (actionDir) {
          case ActionDirection.Forward:
            return dir;
          case ActionDirection.Left:
            return Direction.West;
          case ActionDirection.Right:
            return Direction.East;
        }
      case Direction.South:
        switch (actionDir) {
          case ActionDirection.Forward:
            return dir;
          case ActionDirection.Left:
            return Direction.East;
          case ActionDirection.Right:
            return Direction.West;
        }
      case Direction.East:
        switch (actionDir) {
          case ActionDirection.Forward:
            return dir;
          case ActionDirection.Left:
            return Direction.North;
          case ActionDirection.Right:
            return Direction.South;
        }
      case Direction.West:
        switch (actionDir) {
          case ActionDirection.Forward:
            return dir;
          case ActionDirection.Left:
            return Direction.South;
          case ActionDirection.Right:
            return Direction.North;
        }
    }
  }
}
