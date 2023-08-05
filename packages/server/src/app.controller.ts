import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Redirect,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateCatDto } from "./data-transfer-objects/test-SHE-dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  @HttpCode(204)
  create(@Body() createCatDto: CreateCatDto): string {
    return this.appService.postHello(createCatDto);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
