import { HttpException, HttpStatus } from "@nestjs/common";

export class ForbiddenException extends HttpException {
  constructor(error: any) {
    super("Custom Forbidden Error", HttpStatus.FORBIDDEN, {
      cause: error,
    });
  }
}
