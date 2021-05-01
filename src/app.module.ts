import { Module } from '@nestjs/common';
import { BattleController } from './battle/battle.controller';
import { BattleService } from './battle/battle.service';

@Module({
  imports: [],
  controllers: [BattleController],
  providers: [BattleService],
})
export class AppModule {}
