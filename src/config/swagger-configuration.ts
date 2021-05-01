import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const createSwagger = (app: INestApplication) => {
  const api = new DocumentBuilder()
    .setTitle('Battle Simulator')
    .setDescription('The Battle Simulator API description')
    .setVersion('1.0')
    .addTag('battle')
    .build();
  const document = SwaggerModule.createDocument(app, api);
  SwaggerModule.setup('api', app, document);
};

export default createSwagger;
