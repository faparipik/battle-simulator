import { Injectable } from '@nestjs/common';
import {
  PROBABILITY_FOR_CORONA,
  PERCENT_OF_DEATH_SOLDERS,
} from '../constants/battle-chances';

@Injectable()
export class BattleService {
  findWinner(army1: number, army2: number): string {
    ({ army1, army2 } = this.removeSoldiersWithCorona(army1, army2));

    const totalNumberOfSoldiers: number = army1 + army2;
    const mathRandom: number = Math.floor(
      Math.random() * (totalNumberOfSoldiers + 1),
    );

    if (army1 === army2) {
      return ~~(Math.random() * 2) ? 'Army 1' : 'Army 2';
    }

    if (mathRandom <= Math.min(army1, army2)) {
      const selectSmallerArmy = army1 < army2 ? 'Army 1' : 'Army 2';
      return selectSmallerArmy;
    }

    const selectLargerArmy = army1 < army2 ? 'Army 2' : 'Army 1';
    return selectLargerArmy;
  }

  private removeSoldiersWithCorona(army1: number, army2: number) {
    if (PROBABILITY_FOR_CORONA >= Math.random()) {
      if (~~(Math.random() * 2)) {
        army1 -= army1 * PERCENT_OF_DEATH_SOLDERS;
      } else {
        army2 -= army2 * PERCENT_OF_DEATH_SOLDERS;
      }
    }
    return { army1, army2 };
  }
}
