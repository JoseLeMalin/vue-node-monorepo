import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { YoutubeModule } from "./youtube/youtube.module";

import { LoggerMiddleware } from "./common/middlewares/logger.middleware";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [YoutubeModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("youtube");
  }
}
