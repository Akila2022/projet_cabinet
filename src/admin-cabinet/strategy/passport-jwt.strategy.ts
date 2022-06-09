import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { PayloadInterface } from '../interfaces/payload.interface';
import { Repository } from 'typeorm';
import { AdminCabinetEntity } from '../entities/admin-cabinet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(AdminCabinetEntity)
    private adminCabinetRepository : Repository<AdminCabinetEntity>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:process.env.SECRET,
    });
  }

  async validate(payload: PayloadInterface) {
     const adminCabinet = await this.adminCabinetRepository.findOne({userName:payload.userName});

     if(adminCabinet){
        const {password, salt, ...result}= adminCabinet;
        return result;
     } else{
       throw new UnauthorizedException();
     }

  }
}
  