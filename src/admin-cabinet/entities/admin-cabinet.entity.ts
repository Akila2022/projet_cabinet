import { Type } from "class-transformer";
import { AvocatEntity } from "src/avocat/entities/avocat.entity";
import { CabinetEntity } from "src/cabinet/entities/cabinet.entity";
import { UsersEntities } from "src/generics/users.entities.";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('adminCabinet')
export class AdminCabinetEntity extends UsersEntities  {

    @PrimaryGeneratedColumn()
    id:number;

    @OneToOne(() =>CabinetEntity,
            {
                cascade:['insert','update']
            }
    )
    @JoinColumn()
    cabinet : CabinetEntity

    @OneToMany(
        Type=> AvocatEntity,
        (avocat)=> avocat.adminCabinet,
        {
            nullable:true
        }
    )
    avocats : AvocatEntity[]
}
