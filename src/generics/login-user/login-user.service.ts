import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AdminCabinetEntity } from 'src/admin-cabinet/entities/admin-cabinet.entity';
import { AvocatEntity } from 'src/avocat/entities/avocat.entity';
import { ClientEntity } from 'src/client/entities/client.entity';
import { UserRoleEnum } from 'src/enums/user-role.enum';
import { Repository } from 'typeorm';
import { LoginUserDto } from '../login-user.dto';
import * as bcrypt from 'bcrypt';
import { Global } from '@nestjs/common';

@Global()
@Injectable()
export class LoginUserService {

    constructor(private adminCabinetRepository :Repository<AdminCabinetEntity>,
                private avocatRepository : Repository<AvocatEntity>,
                private clientRepository : Repository<ClientEntity>,
               /* private adminRepository : Repository<AdminEntity>*/
        ){}

    async login(loginUser : LoginUserDto):Promise<Partial<AdminCabinetEntity|ClientEntity|AvocatEntity>>{

        const {role, userName, password}=loginUser;
        
        if(role==UserRoleEnum.ADMIN){
        }else if (role==UserRoleEnum.ADMIN_CAB){
            const adminCabinet= await this.adminCabinetRepository.createQueryBuilder("adminCabinet")
            .where("adminCabinet.userName = : userName or adminCabinet.password= : userName",
            {userName}
            )
            .getOne();

            if(!adminCabinet)
                throw new NotFoundException('username ou password érronée');
            const hashedPassword = bcrypt.hash(password, adminCabinet.salt);
            if(hashedPassword===adminCabinet.password){
                return {
                    userName,
                    email : adminCabinet.email,
                    role: adminCabinet.role
                };
            }
            
        }else if (role==UserRoleEnum.AVOCAT){

        }else if (role==UserRoleEnum.CLIENT){

        }else{

        }
    }

}
