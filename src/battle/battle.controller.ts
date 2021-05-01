import { Controller, Get, Query } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleQuery } from './dto/battle.dto';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}
  @Get()
  findWinner(@Query() { army1, army2 }: BattleQuery): string {
    return this.battleService.findWinner(army1, army2);
  }
}
