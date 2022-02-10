import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
  if (!process.env.TEST_OBSERVABILITY_SECRET) {
    throw new Error("The TEST_OBSERVABILITY_SECRET environment variable must be set.")
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(process.env.PORT, 10) || 3000);
}
bootstrap();
