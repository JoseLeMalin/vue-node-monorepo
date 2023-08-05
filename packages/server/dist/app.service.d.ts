import { CreateCatDto } from './data-transfer-objects/test-SHE-dto';
export declare class AppService {
    getHello(): string;
    postHello(createCatDto: CreateCatDto): string;
}
