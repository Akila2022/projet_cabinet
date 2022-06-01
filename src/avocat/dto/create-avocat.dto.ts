import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";
import { Column } from "typeorm";

export class CreateAvocatDto {
  @Column()
  @IsNotEmpty()
  firstName:string;

  @Column()
  @IsNotEmpty()
  lastName:string;

  @Column()
  @IsNotEmpty()
  email:string;

  @Column()
  @IsNotEmpty()
  country:string

  @Column()
  @IsNotEmpty()
  city:string

  @Column()
  @IsNotEmpty()
  contact : number;

  @Column()
  @IsNotEmpty()
  adress:string;

  @Column()
  @IsNotEmpty()
  speciality:string;

  @Column()
  @IsNotEmpty()
  workExp : number;

  @Column()
  @IsOptional()
  path : string;


}
