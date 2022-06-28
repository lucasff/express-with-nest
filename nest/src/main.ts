import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { expressApp } from '../../src/app';

async function bootstrap() {
  const adapter = new ExpressAdapter(expressApp);
  const nestApp = await NestFactory.create(AppModule, adapter);
  await nestApp.listen(3000);
}
bootstrap();
