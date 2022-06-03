import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvocatModule } from './avocat/avocat.module';
import { CabinetModule } from './cabinet/cabinet.module';
import { AdminCabinetModule } from './admin-cabinet/admin-cabinet.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'projetCabinet',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  })
  ,
  AvocatModule,
  CabinetModule,
  AdminCabinetModule,
  ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
