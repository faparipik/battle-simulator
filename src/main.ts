import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as apm from 'elastic-apm-node';
import { ErrorFilter } from './error.filter';

async function bootstrap() {
  apm.start({
    serviceName: 'Battle-Simulator',

    secretToken: '',

    serverUrl: 'http://apm:8200/',
  });
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ErrorFilter());

  await app.listen(3000);
}
bootstrap();
