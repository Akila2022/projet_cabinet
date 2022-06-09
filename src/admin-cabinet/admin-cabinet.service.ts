import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminCabinetDto } from './dto/create-admin-cabinet.dto';
import { UpdateAdminCabinetDto } from './dto/update-admin-cabinet.dto';
import { AdminCabinetEntity } from './entities/admin-cabinet.entity';
import * as bcrypt from 'bcrypt';
import { ConflictException } from '@nestjs/common';
import { UserRoleEnum } from 'src/enums/user-role.enum';
import { LoginUserDto } from 'src/generics/login-user.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AdminCabinetService {

  constructor(
    @InjectRepository(AdminCabinetEntity)
    private adminCabinetRepository : Repository<AdminCabinetEntity>,
    private jwtService : JwtService
  ){}

  async subscribe(adminCabinetData : CreateAdminCabinetDto):Promise<Partial<AdminCabinetEntity>>{

    const adminCabinet= this.adminCabinetRepository.create({
      ...adminCabinetData
    });
    adminCabinet.salt= await bcrypt.genSalt();
    adminCabinet.password= await bcrypt.hash(adminCabinet.password, adminCabinet.salt);
    try {
      this.adminCabinetRepository.save(adminCabinet);
    } catch(e) {
      throw new ConflictException(`le nom d'utilisateur et le mot de pass doivent etre unique `);
    }

    /*delete adminCabinet.salt;
    delete adminCabinet.password;*/
     
    return {
      id:adminCabinet.id,
      userName:adminCabinet.userName,
      email: adminCabinet.email,
      password:adminCabinet.password
    };
  }

  async login(loginUser : LoginUserDto){
    const {role, userName, password}=loginUser;
     if (role==UserRoleEnum.ADMIN_CAB){
        const adminCabinet= await this.adminCabinetRepository.createQueryBuilder("adminCabinet")
        .where("adminCabinet.userName = :userName or adminCabinet.email = :userName",
        {userName}
        )
        .getOne();
        if(!adminCabinet)
            throw new NotFoundException('username ou password érronée');
        const hashedPassword = await bcrypt.hash(password, adminCabinet.salt);
        if(hashedPassword===adminCabinet.password){
          const payload = {
            userName: adminCabinet.userName,
            email : adminCabinet.email,
            role: adminCabinet.role
           };
          const _jwt=await this.jwtService.sign(payload);

          return {
            "access_token":_jwt
          }
        }else{
          throw new NotFoundException('username ou password érronée');
        }
    }
}

  create(createAdminCabinetDto: CreateAdminCabinetDto) {
    return 'This action adds a new adminCabinet';
  }

  findAll() {
    return `This action returns all adminCabinet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminCabinet`;
  }

  update(id: number, updateAdminCabinetDto: UpdateAdminCabinetDto) {
    return `This action updates a #${id} adminCabinet`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminCabinet`;
  }
}
