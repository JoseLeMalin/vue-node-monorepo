import {
  Controller,
  Get,
  Post,
  ParseIntPipe,
  Param,
  UsePipes,
  UseGuards,
  Body,
} from "@nestjs/common";
import { DummyjsonService } from "./dummyjson.service";
import { JoiValidationPipe, createCommentSchema } from "./schema-validation";
import { CommentContent } from "./../data-transfer-objects/dummyjson-dto";
import {
  AuthGuardDummyJson,
  DummyJsonRoles,
} from "../authorizations/dummyjsonGuard";
// import { CommentCreate } from "./dummyjson.zod";
import { CommentCreate } from "@jlm/common";

@Controller("dummyjson")
@UseGuards(AuthGuardDummyJson)
export class DummyjsonController {
  constructor(private readonly dummyjsonService: DummyjsonService) {}

  @Get("/users/:id")
  @DummyJsonRoles("user")
  async findUser(@Param("id", ParseIntPipe) id: number): Promise<string> {
    const result = await this.dummyjsonService.getUser(id);
    return result;
  }

  // Comments
  @Post("/comments")
  @UsePipes(new JoiValidationPipe(createCommentSchema))
  async createComment(
    @Body() newComment: CommentContent,
  ): Promise<CommentCreate> {
    const result = await this.dummyjsonService.createCommment<CommentContent>(
      newComment,
    );
    return result;
  }
}
