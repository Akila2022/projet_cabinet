import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminCabinetDto } from './dto/create-admin-cabinet.dto';
import { UpdateAdminCabinetDto } from './dto/update-admin-cabinet.dto';
import { AdminCabinetEntity } from './entities/admin-cabinet.entity';
import * as bcrypt from 'bcrypt';
import { ConflictException } from '@nestjs/common';
@Injectable()
export class AdminCabinetService {

  constructor(
    @InjectRepository(AdminCabinetEntity)
    private adminCabinetRepository : Repository<AdminCabinetEntity>
  ){}

  async subscribe(adminCabinetData : CreateAdminCabinetDto):Promise<AdminCabinetEntity>{

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
    return adminCabinet;
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
