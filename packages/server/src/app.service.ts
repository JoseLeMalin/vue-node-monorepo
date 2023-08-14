import { Injectable, Inject } from "@nestjs/common";
import { CreateCatDto } from "./data-transfer-objects/test-SHE-dto";
import { useFactoryProviders } from "src/types/providers.types";

@Injectable()
export class AppService {
  constructor(
    @Inject("APP_PROVIDER")
    private appserviceaze: useFactoryProviders,
  ) {}

  getHello(): string {
    return "Hello World!";
  }

  postHello(createCatDto: CreateCatDto): string {
    console.log(createCatDto);
    return "Posted Hello World!";
  }
}
