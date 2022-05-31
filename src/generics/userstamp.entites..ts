import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column } from 'typeorm';

export class UserstampEntites {
  @Column({
    length:30
  })
  firstName:string;

  @Column({
    length:50
  })
  lastName:string;

  @Column()
  email:string;

  @Column()
  country:string

  @Column()
  city:string

  @Column()
  contact : number;

  @Column()
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
