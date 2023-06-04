import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";
import {
  FastifyAdapter,
  NestFastifyApplication,} from '@nestjs/platform-fastify';
import * as fastifyMultipart from 'fastify-multipart';
import path, {join} from "path";
import fastifyCookie from "@fastify/cookie";
async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
  );

  await app.register(fastifyMultipart, {
    limits: {
      attachFieldsToBody: true,
    },

  });
  app.enableCors()
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });
  await app.register(fastifyCookie, {
    secret: 'my-secret', // for cookies signature
  });
  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

}
bootstrap();
