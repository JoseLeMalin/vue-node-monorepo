import { AppService } from './app.service';
import { CreateCatDto } from './data-transfer-objects/test-SHE-dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    create(createCatDto: CreateCatDto): string;
    getHello(): string;
}
