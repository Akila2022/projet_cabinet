import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvocatService } from './avocat.service';
import { CreateAvocatDto } from './dto/create-avocat.dto';
import { UpdateAvocatDto } from './dto/update-avocat.dto';
import { AvocatEntity } from './entities/avocat.entity';

@Controller('avocat')
export class AvocatController {
  constructor(private readonly avocatService: AvocatService) {}

  @Post()
  async create(@Body() createAvocatDto: CreateAvocatDto) {
    return await this.avocatService.create(createAvocatDto);
  }

  @Get()
  async findAll() : Promise<AvocatEntity[]> {
    return await  this.avocatService.findAll();
  }

  @Get('recover/:id')
  async recover(@Param('id') id: string){
    return await this.avocatService.softRestore(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.avocatService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAvocatDto: UpdateAvocatDto) {
    return await this.avocatService.update(+id, updateAvocatDto);
  }

  @Delete(':id')
  async softRemove(@Param('id') id: string) {
    return await this.avocatService.softDelete(id);
  }
}
