import { IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class BattleQuery {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  army1: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  army2: number;
}
