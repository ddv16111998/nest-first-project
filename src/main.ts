import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { config } from 'dotenv';
config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.APP_PORT, 'process.env.APP_PORT');
  await app.listen(process.env.APP_PORT);
}
bootstrap();
