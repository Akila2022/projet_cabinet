import { IsEmail, IsNotEmpty } from 'class-validator';
import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column } from 'typeorm';

export class UserstampEntites {
  @Column({
    length:30
  })
  @IsNotEmpty()
  firstName:string;

  @Column({
    length:50
  })
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
  adress:string

  @CreateDateColumn(
    {
      update: false
    }
  )
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;


}
