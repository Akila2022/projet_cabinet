import { UserstampEntites } from "src/generics/userstamp.entites.";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('avocat')
export class AvocatEntity extends  UserstampEntites{

    @PrimaryGeneratedColumn()
    id:number;

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

    @Column()
    speciality:string;

    @Column()
    workExp : number;

    @Column()
    path:string;
}
