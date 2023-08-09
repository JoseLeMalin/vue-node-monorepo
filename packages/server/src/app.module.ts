import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { YoutubeModule } from "./youtube/youtube.module";

import { LoggerMiddleware } from "./common/middlewares/logger.middleware";
import { DummyjsonController } from "./dummyjson/dummyjson.controller";
import { DummyjsonService } from "./dummyjson/dummyjson.service";
import { DummyjsonModule } from "./dummyjson/dummyjson.module";

@Module({
  controllers: [AppController, DummyjsonController],
  providers: [AppService, DummyjsonService],
  imports: [YoutubeModule, DummyjsonModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("youtube");
  }
}
