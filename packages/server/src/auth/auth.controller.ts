import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request,
  Req,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserAuthDto } from "../data-transfer-objects/auth.dto";
import { AuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Get("login")
  getLogin(
    signInDto = {
      username: "john",
      password: "changeme",
    },
  ) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post("login")
  // signIn(@Body() signInDto: UserAuthDto) {
  signIn(
    signInDto = {
      username: "string",
      password: "string",
    },
  ) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Req() request: Request) {
    console.log("request.user", request);

    return true;
  }
}
