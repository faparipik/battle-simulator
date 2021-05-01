import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { BattleModule } from '../src/battle/battle.module';
import globalConfig from '../src/config/global-configs';

describe('BattleController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [BattleModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    globalConfig(app);
    await app.init();
  });

  it('/battle (GET) with query', () => {
    return request(app.getHttpServer())
      .get('/battle?army1=20&army2=54')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8');
  });

  it('should fail when no query', () => {
    return request(app.getHttpServer())
      .get('/battle')
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8');
  });
});
