import { UserstampEntites } from "src/generics/userstamp.entites.";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('avocat')
export class AvocatEntity extends  UserstampEntites{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    speciality:string;

    @Column()
    workExp : number;

    @Column()
    path:string;
}
