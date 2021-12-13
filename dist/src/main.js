"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const cookiParser = require("cookie-parser");
async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.use(cookiParser());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Практика')
        .setDescription('Документация REST API')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        origin: ['http://localhost:4200'],
        credentials: true
    });
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map