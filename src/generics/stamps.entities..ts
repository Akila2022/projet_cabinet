import { IsEmail } from 'class-validator';
import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column} from 'typeorm';

export class StampsEntities {
    
    @Column()
    path : string;

    @Column({
    unique:true
    })
    @IsEmail()
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
