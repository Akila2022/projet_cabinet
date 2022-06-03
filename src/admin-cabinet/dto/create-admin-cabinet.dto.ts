import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";
import { UserRoleEnum } from "src/enums/user-role.enum";
import { Column } from "typeorm";

export class CreateAdminCabinetDto {
      @Column({
        length:30
      })
      @IsNotEmpty()
      userName:string;
    
      @Column({
        length:40
      })
      @IsNotEmpty()
      firstName:string;
    
      @Column({
        length:60
      })
      @IsNotEmpty()
      lastName:string;

      @Column()
      @IsNotEmpty()
      path : string;
  
      @Column({
      unique:true
      })
      @IsEmail()
      @IsNotEmpty()
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
      adress:string

      @Column({
        enum:UserRoleEnum
      })
      @IsNotEmpty()
      role:string;

      @Column()
      @IsNotEmpty()
      password:string;
    
}
