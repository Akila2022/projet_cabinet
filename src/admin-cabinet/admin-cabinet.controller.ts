import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginUserDto } from 'src/generics/login-user.dto';
import { AdminCabinetService } from './admin-cabinet.service';
import { CreateAdminCabinetDto } from './dto/create-admin-cabinet.dto';
import { UpdateAdminCabinetDto } from './dto/update-admin-cabinet.dto';
import { AdminCabinetEntity } from './entities/admin-cabinet.entity';

@Controller('admin-cabinet')
export class AdminCabinetController {
  constructor(private readonly adminCabinetService: AdminCabinetService) {}

  @Post('regist-admin-avocat')
  register(@Body() createAdminCabinetDto: CreateAdminCabinetDto):Promise<Partial<AdminCabinetEntity>> {
    return this.adminCabinetService.subscribe(createAdminCabinetDto);
  }


  @Post('login-admin-avocat')
  login(@Body() loginUserDto : LoginUserDto){
    return this.adminCabinetService.login(loginUserDto);
  }
  @Post()
  create(@Body() createAdminCabinetDto: CreateAdminCabinetDto) {
    return this.adminCabinetService.create(createAdminCabinetDto);
  }

  @Get()
  findAll() {
    return this.adminCabinetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminCabinetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminCabinetDto: UpdateAdminCabinetDto) {
    return this.adminCabinetService.update(+id, updateAdminCabinetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminCabinetService.remove(+id);
  }
}
