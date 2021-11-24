import { AppService } from './app.service';
import { Message } from './message.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    get(): Promise<Message[]>;
    post(data: any): Promise<any>;
    delete(id: any): Promise<any>;
}
