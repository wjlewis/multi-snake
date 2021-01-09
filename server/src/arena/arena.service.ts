import { Injectable } from '@nestjs/common';
import { DenService } from '../den/den.service';
import { Action } from './types/action';
import { Arena } from './types/arena';
import { lasts } from '../tools';

@Injectable()
export class ArenaService {
  private arena: Arena;
  private moves: Action[] = [];

  constructor(private readonly den: DenService) {
    this.arena = this.initArena();
  }

  move(action: Action): void {
    this.moves.push(action);
  }

  getUpdate(): Arena {
    const moves = lasts(this.moves, (s1, s2) => s1.id === s2.id);
    this.moves = [];

    let updatedArena = this.arena;
    moves.forEach(move => {
      updatedArena = this.execMove(move, updatedArena);
    });

    this.arena = updatedArena;
    return this.arena;
  }

  execMove(move: Action, arena: Arena): Arena {
    return arena;
  }

  private initArena(): Arena {
    return {
      snakes: [],
    };
  }
}
