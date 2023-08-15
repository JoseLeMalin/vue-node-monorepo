import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common";
import { ObjectSchema } from "joi";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Joi = require("joi");
@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform<T>(value: T, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException("Validation failed");
    }
    return value;
  }
}

export const createCommentSchema = Joi.object({
  body: Joi.string().required(),
  postId: Joi.number().required(),
  userId: Joi.number().required(),
});
