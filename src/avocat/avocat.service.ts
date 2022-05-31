import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAvocatDto } from './dto/create-avocat.dto';
import { UpdateAvocatDto } from './dto/update-avocat.dto';
import { AvocatEntity } from './entities/avocat.entity';

@Injectable()
export class AvocatService {

  constructor(
    @InjectRepository(AvocatEntity)
    private avocatsRepository: Repository<AvocatEntity>,
  ) {}

  create(createAvocatDto: CreateAvocatDto) {
    return 'This action adds a new avocat';
  }

  async findAll(): Promise<AvocatEntity[]> {
    return await this.avocatsRepository.find();
  }

  async findOne(id: string): Promise<AvocatEntity> {
    return await this.avocatsRepository.findOne(+id);
  }

  update(id: number, updateAvocatDto: UpdateAvocatDto) {
    return `This action updates a #${id} avocat`;
  }

  async softRemove(id: string): Promise<void> {
    const avocatToRemove = await this.findOne(id);
    await this.avocatsRepository.softRemove(avocatToRemove);
  }

  
}
