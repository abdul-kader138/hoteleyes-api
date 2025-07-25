import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  (app as any).set?.('trust proxy', 1);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(cookieParser());

  // Enable CORS for frontend API requests
  const FRONTEND_PORT = process.env.FRONTEND_PORT || 5173;
  const corsOrigins = [`http://localhost:${FRONTEND_PORT}`];
  if (process.env.NX_FRONTEND_URL)
    corsOrigins.push(process.env.NX_FRONTEND_URL);
  app.enableCors({
    origin: corsOrigins,
    credentials: true,
  });

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('ORORO-WEB API')
    .setDescription('API documentation for ORORO-WEB API')
    .setVersion('1.0')
    .addTag('ORORO-WEB API')
    .addCookieAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}
bootstrap();
