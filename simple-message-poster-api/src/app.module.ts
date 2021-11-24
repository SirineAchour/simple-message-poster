import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Message } from './message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'messages_db',
      host: 'database',
      port: 3306,
      username: 'root',
      password: '',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Message]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
