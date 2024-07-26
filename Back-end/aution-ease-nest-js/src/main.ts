import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Mock project Nest JS API')
    .setDescription(
      'The mock project API of Nest JS is a part of the back-end mock project',
    )
    .setVersion('1.0')
    .addTag('Mock Project API')
    .addBearerAuth()
    .addCookieAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document, {
    jsonDocumentUrl: 'api-doc/json',
  });

  await app.listen(3000);
}
bootstrap();
