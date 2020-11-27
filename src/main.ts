import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { resolve } from "path";
import { AppModule } from "./app.module";
import * as cors from "cors";
import * as helmet from "helmet";
import * as cookieParser from "cookie-parser";
import * as methodOverride from "method-override";
import * as compression from "compression";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.use(methodOverride("_method"));
  app.setBaseViewsDir(resolve("./src/views"));
  app.setViewEngine("ejs");
  app.use(cookieParser());
  app.use(compression());
  app.use(helmet());
  app.use(cors());

  const options = new DocumentBuilder()
    .setTitle("Books")
    .setDescription("The books API description")
    .setVersion("1.0")
    .addTag("books")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(3000);
  console.log(`Application is running on: localhost:3000`);
}
bootstrap();
