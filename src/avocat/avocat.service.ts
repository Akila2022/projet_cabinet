import { NotFoundException } from '@nestjs/common';
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

  async create(createAvocatDto: CreateAvocatDto) {
    return await this.avocatsRepository.save(createAvocatDto);
  }

  async findAll(): Promise<AvocatEntity[]> {
    return await this.avocatsRepository.find();
  }

  async findOne(id: string): Promise<AvocatEntity> {
    const avocatToFind = await this.avocatsRepository.findOne(+id);
    if(!avocatToFind)
      throw new NotFoundException(`L'avocat d'id ${id} n'existe pas.`);
    return avocatToFind;
  }

  async update(id: number, updateAvocatDto: UpdateAvocatDto) {
      const newAvocat = await this.avocatsRepository.preload({
        id,
        ...updateAvocatDto
      })
      if (! newAvocat)
      throw new NotFoundException(`le cabinet d'${id} n'existe pas ...`);
    // sauvegarde les mod
      return await this.avocatsRepository.save(newAvocat);

  }

  async softRemove(id: string): Promise<void> {
    const avocatToRemove = await this.findOne(id);
    await this.avocatsRepository.softRemove(avocatToRemove);
  }

  async softRecover(id: string) {
    const avocatToRecover = await this.findOne(id)
    return await this.avocatsRepository.recover(avocatToRecover);
  }

  
}
