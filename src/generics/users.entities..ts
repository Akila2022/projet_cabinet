import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserRoleEnum } from 'src/enums/user-role.enum';
import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column } from 'typeorm';
import { StampsEntities } from './stamps.entities.';

export class UsersEntities extends StampsEntities {

  @Column({
    length:30
  })
  userName:string;

  @Column({
    length:40
  })
  firstName:string;

  @Column({
    length:60
  })
  lastName:string;

  @Column()
  password:string;

  @Column()
  salt:string;

  @Column({
    enum:UserRoleEnum
  })
  role:string

}
