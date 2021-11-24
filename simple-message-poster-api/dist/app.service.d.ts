import { Repository } from 'typeorm';
import { Message } from './message.entity';
import { DeleteResult } from 'typeorm';
export declare class AppService {
    private message_repository;
    constructor(message_repository: Repository<Message>);
    get_all(): Promise<Message[]>;
    create_message(message: string): Promise<Message>;
    delete_message(id: any): Promise<DeleteResult>;
}
