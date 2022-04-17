<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


  <h2 align="center">Nest from scratch.</h2>
    <p align="center">

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

### Description

To create a Nest project from scratch:

- Create a new folder and move into it
- Run ```npm start``` and configure the new project
- Install the basic packages that Nest require: 
 

  ```npm install @nestjs/common @nestjs/core @nestjs/platform-express reflect-metadata typescript```

- Create a tsconfig.json file in the root folder
```angular2html
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es2017",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```

- Create the src/ folder
- Creates the file main.ts inside the src/ folder \ The main.ts file is the first archive running by Nest.
- Create a Module and a Controller inside main.ts. The best practice is that modules and controllers are located on individual files. But in this example Nest from scratch project we will create them inside the main.ts

```
    import {Controller, Get, Module} from "@nestjs/common";
    
    @Controller()
    export class AppController {
        @Get()
        index() {
            return 'Hola NestJs';
        }
    }
    
    @Module({
        imports: [],
        controllers: [AppController],
        providers:[],
        exports:[]
    })
    export class AppModule {}
```

Nest required at least a Module and a Controller to run. In this case I include a Get route inside the controller. Controller, Module and Get are imported from @nestjs/common

The module includes the controller on its array configuration in the decorator.

- Now create the bootstrap function inside the main.ts file, and add the call of this function at the last of the file:

```angular2html
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

bootstrap();
```

Inside the bootstrap function is created the app constant which calls the create method of NestFactory, which receive the AppModule as parameter.

To use NestFactory class it is necessary to import it from @nest/core at the beginning of the file:

```angular2html
import {Controller, Get, Module} from "@nestjs/common";
import {NestFactory} from "@nestjs/core";
...
```

Finally, the ```bootstrap();``` function is run to start the application and listen in port 3000.


### Installation

```bash
$ npm install
```

### Running the app

To start the server in Nest from scratch you must run:

```bash
$ npx ts-node-dev src/main.ts

```

### Stay in touch

- Author - Rafael Gamez Diaz \
Backend Developer \
https://github.com/rafaelgamezdiaz \
https://www.linkedin.com/in/rafael-gamez-diaz 