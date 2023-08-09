import {
  Controller,
  Get,
  Post,
  ParseIntPipe,
  Injectable,
  Param,
  UsePipes,
  Body,
} from "@nestjs/common";
import { DummyjsonService } from "./dummyjson.service";
import { ObjectSchema } from "joi";
import { JoiValidationPipe, createCommentSchema } from "./schema-validation";
import { CommentContent } from "src/data-transfer-objects/dummyjson-dto";

@Controller("dummyjson")
export class DummyjsonController {
  constructor(private readonly dummyjsonService: DummyjsonService) {}

  @Get("/users/:id")
  async findUser(@Param("id", ParseIntPipe) id: number): Promise<string> {
    const result = await this.dummyjsonService.getUser(id);
    return result;
  }

  // Comments
  @Post("/comments")
  @UsePipes(new JoiValidationPipe(createCommentSchema))
  async createComment<CommentContent>(
    @Body() newComment: CommentContent,
  ): Promise<string> {
    const result = await this.dummyjsonService.createCommment(newComment);
    return result;
  }
}
