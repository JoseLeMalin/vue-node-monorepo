import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.enableCors({
  //   origin: ["http://localhost:9000/", "http://localhost:3000/"],
  //   preflightContinue: true,
  // });

  await app.listen(3000);
  console.log("localhost:3000/");
}
bootstrap();

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, { cors: true });
//   app.enableCors({
//     origin: ["http://localhost:9000/", "http://localhost:3000/"],
//     preflightContinue: true,
//   });
//   app.use(cors());
//   await app.listen(3000);
//   console.log("localhost:3000/");
// }
// bootstrap();
