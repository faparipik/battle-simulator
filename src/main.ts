import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as apm from 'elastic-apm-node';
import { ErrorFilter } from './error.filter';
import config from './config/env.config';

async function bootstrap() {
  const { port } = config;
  apm.start();
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ErrorFilter());

  await app.listen(port);
}
bootstrap();
