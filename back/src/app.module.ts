import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';



@Module({
  imports: [
   
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      }),
    UsersModule
  ],
  controllers: [AppController, ],
  providers: [AppService, DatabaseService],
})
export class AppModule {
  constructor (private readonly DatabaseService:DatabaseService){
    this.DatabaseService.testConnection()
  }
}
