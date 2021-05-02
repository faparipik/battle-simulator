import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as apm from 'elastic-apm-node';
import config from './config/env.config';
import createSwagger from './config/swagger-configuration';
import createGlobalSetup from './config/global-configs';

async function bootstrap() {
  const { port } = config;
  apm.start();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  createGlobalSetup(app);
  createSwagger(app);

  await app.listen(port);
}
bootstrap();
