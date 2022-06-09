import { Module } from '@nestjs/common';
import { AdminCabinetService } from './admin-cabinet.service';
import { AdminCabinetController } from './admin-cabinet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminCabinetEntity } from './entities/admin-cabinet.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { JwtStrategy } from './strategy/passport-jwt.strategy';


dotenv.config()
@Module({
  imports:[TypeOrmModule.forFeature([AdminCabinetEntity]),
            PassportModule.register({
              defaultStrategy:'jwt'
            }),
            JwtModule.register({
              secret:process.env.SECRET,
              signOptions:{
                expiresIn:3600
              }
            })  
            ],
  controllers: [AdminCabinetController],
  providers: [AdminCabinetService,JwtStrategy]
})
export class AdminCabinetModule {}
