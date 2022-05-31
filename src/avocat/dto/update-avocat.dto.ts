import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { Column } from 'typeorm';
import { CreateAvocatDto } from './create-avocat.dto';

export class UpdateAvocatDto extends PartialType(CreateAvocatDto) {
  @Column()
  @IsOptional()
  firstName:string;

  @Column()
  @IsOptional()
  lastName:string;

  @Column()
  @IsOptional()
  email:string;

  @Column()
  @IsOptional()
  country:string

  @Column()
  @IsOptional()
  city:string

  @Column()
  @IsOptional()
  contact : number;

  @Column()
  @IsOptional()
  adress:string;

  @Column()
  @IsOptional()
  speciality:string;

  @Column()
  @IsOptional()
  workExp : number;

  @Column()
  @IsOptional()
  path : string;
}
