"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const compression = require("compression");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.use(methodOverride("_method"));
    app.setBaseViewsDir(path_1.resolve("./src/views"));
    app.setViewEngine("ejs");
    app.use(cookieParser());
    app.use(compression());
    app.use(helmet());
    app.use(cors());
    const options = new swagger_1.DocumentBuilder()
        .setTitle("Books")
        .setDescription("The books API description")
        .setVersion("1.0")
        .addTag("books")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("swagger", app, document);
    await app.listen(3000);
    console.log(`Application is running on: localhost:3000`);
}
bootstrap();
//# sourceMappingURL=main.js.map