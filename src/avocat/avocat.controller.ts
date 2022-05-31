import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvocatService } from './avocat.service';
import { CreateAvocatDto } from './dto/create-avocat.dto';
import { UpdateAvocatDto } from './dto/update-avocat.dto';

@Controller('avocat')
export class AvocatController {
  constructor(private readonly avocatService: AvocatService) {}

  @Post()
  create(@Body() createAvocatDto: CreateAvocatDto) {
    return this.avocatService.create(createAvocatDto);
  }

  @Get()
  findAll() {
    return this.avocatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avocatService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvocatDto: UpdateAvocatDto) {
    return this.avocatService.update(+id, updateAvocatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avocatService.softRemove(id);
  }
}
