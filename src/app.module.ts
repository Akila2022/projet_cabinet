import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvocatModule } from './avocat/avocat.module';
import { CabinetModule } from './cabinet/cabinet.module';
import { AdminCabinetModule } from './admin-cabinet/admin-cabinet.module';
import { ClientModule } from './client/client.module';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';

dotenv.config()
@Module({
  imports: [
   
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  })
  ,
  AvocatModule,
  CabinetModule,
  AdminCabinetModule,
  ClientModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
