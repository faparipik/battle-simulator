import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class BattleQuery {
  @Type(() => Number)
  @IsInt()
  army1: number;

  @Type(() => Number)
  @IsInt()
  army2: number;
}
