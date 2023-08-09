import { Module } from "@nestjs/common";
import { DummyjsonController } from "./dummyjson.controller";
import { DummyjsonService } from "./dummyjson.service";
@Module({
  controllers: [DummyjsonController],
  providers: [DummyjsonService],
  exports: [DummyjsonService],
})
export class DummyjsonModule {}
