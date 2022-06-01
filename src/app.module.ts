import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvocatModule } from './avocat/avocat.module';
import { CabinretAdminModule } from './cabinret-admin/cabinret-admin.module';
import { CabinetAdminModule } from './cabinet-admin/cabinet-admin.module';

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
  CabinretAdminModule,
  CabinetAdminModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
