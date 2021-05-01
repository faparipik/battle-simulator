import { Injectable } from '@nestjs/common';

@Injectable()
export class BattleService {
  findWinner(army1: number, army2: number): string {
    return `${army1}, ${army2}`;
  }
}
