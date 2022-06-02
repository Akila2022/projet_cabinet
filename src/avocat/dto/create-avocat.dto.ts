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
  @IsOptional()
  email:string;

  @Column()
  @IsOptional()
  country:string

  @Column()
  @IsOptional()
  city:string

  @Column({
    default:254500
  })
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
  workNum: number;

  @Column()
  @IsOptional()
  dis: boolean;

  @Column()
  @IsOptional()
  path : string;


}
