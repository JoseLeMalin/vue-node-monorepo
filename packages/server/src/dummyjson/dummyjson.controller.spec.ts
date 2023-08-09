import { Test, TestingModule } from "@nestjs/testing";
import { DummyjsonController } from "./dummyjson.controller";

describe("DummyjsonController", () => {
  let controller: DummyjsonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DummyjsonController],
    }).compile();

    controller = module.get<DummyjsonController>(DummyjsonController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
