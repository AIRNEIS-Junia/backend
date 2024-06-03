import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme } from 'swagger-themes';
import morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('Airneis')
      .setDescription('Airneis API description')
      .setVersion('0.0.1')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    const theme = new SwaggerTheme('v3');
    SwaggerModule.setup('docs', app, document);

    app.use(morgan('dev'));
  }

  app.enableCors();
  await app.listen(3001);
}
bootstrap();
