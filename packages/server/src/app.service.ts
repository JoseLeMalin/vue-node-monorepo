import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './data-transfer-objects/test-SHE-dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(createCatDto: CreateCatDto): string {
    const test = createCatDto;
    return 'Posted Hello World!';
  }
}