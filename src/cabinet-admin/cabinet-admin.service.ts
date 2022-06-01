import { Injectable } from '@nestjs/common';
import { CreateCabinetAdminDto } from './dto/create-cabinet-admin.dto';
import { UpdateCabinetAdminDto } from './dto/update-cabinet-admin.dto';

@Injectable()
export class CabinetAdminService {
  create(createCabinetAdminDto: CreateCabinetAdminDto) {
    return 'This action adds a new cabinetAdmin';
  }

  findAll() {
    return `This action returns all cabinetAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cabinetAdmin`;
  }

  update(id: number, updateCabinetAdminDto: UpdateCabinetAdminDto) {
    return `This action updates a #${id} cabinetAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} cabinetAdmin`;
  }
}
