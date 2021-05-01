import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import * as compression from 'compression';

import { ErrorFilter } from './error.filter';

const createGlobalSetup = (app: INestApplication) => {
  app.use(helmet());
  app.use(compression());
  app.useGlobalFilters(new ErrorFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
};

export default createGlobalSetup;
