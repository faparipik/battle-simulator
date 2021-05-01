import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { BattleService } from './battle.service';
import { BattleQuery } from './dto/battle.dto';

@Controller('battle')
@ApiTags('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}
  @Get()
  @ApiResponse({
    status: 200,
    description: 'The Winner Is army1 or army2',
    type: String,
  })
  @ApiQuery({ name: 'army1', type: 'number' })
  @ApiQuery({ name: 'army2', type: 'number' })
  findWinner(@Query() { army1, army2 }: BattleQuery): string {
    return this.battleService.findWinner(army1, army2);
  }
}
