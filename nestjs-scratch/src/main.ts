import {Controller, Get, Module} from "@nestjs/common";
import {NestFactory} from "@nestjs/core";

@Controller()
export class AppController {
    @Get()
    index() {
        return 'Hi NestJs!!';
    }
}

@Module({
    imports: [],
    controllers: [AppController],
    providers:[],
    exports:[]
})
export class AppModule {}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

bootstrap().then(r => r);