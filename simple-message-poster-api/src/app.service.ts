import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Message)
    private message_repository: Repository<Message>,
  ) {}

  async get_all(): Promise<Message[]> {
    return await this.message_repository.find();
  }

  async create_message(message: string): Promise<Message> {
    return this.get_all().then(async (res) => {
      return await this.message_repository.save({
        message: message,
        timestamp: Date.now().toString(),
      }).then((r:any)=>{
        let len = res.length 
        if(len> 10 ){
          this.delete_message(res[0])
        }
        return r
      });
    });
  }
  async delete_message(id): Promise<DeleteResult> {
    return await this.message_repository.delete(id);
  }
}
