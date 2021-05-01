import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ErrorFilter } from './error.filter';

const createGlobalSetup = (app: INestApplication) => {
  app.useGlobalFilters(new ErrorFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
};

export default createGlobalSetup;
