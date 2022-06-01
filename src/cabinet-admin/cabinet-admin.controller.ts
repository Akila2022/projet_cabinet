import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CabinetAdminService } from './cabinet-admin.service';
import { CreateCabinetAdminDto } from './dto/create-cabinet-admin.dto';
import { UpdateCabinetAdminDto } from './dto/update-cabinet-admin.dto';

@Controller('cabinet-admin')
export class CabinetAdminController {
  constructor(private readonly cabinetAdminService: CabinetAdminService) {}

  @Post()
  create(@Body() createCabinetAdminDto: CreateCabinetAdminDto) {
    return this.cabinetAdminService.create(createCabinetAdminDto);
  }

  @Get()
  findAll() {
    return this.cabinetAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cabinetAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCabinetAdminDto: UpdateCabinetAdminDto) {
    return this.cabinetAdminService.update(+id, updateCabinetAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cabinetAdminService.remove(+id);
  }
}
