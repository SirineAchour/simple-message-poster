import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Message } from './message.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(): Promise<Message[]> {
    return this.appService.get_all();
  }

  @Post('create')
  async post(@Body() data: any): Promise<any> {
    console.log(data)
    return this.appService.create_message(data["data"]);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.appService.delete_message(id);
  }
}
