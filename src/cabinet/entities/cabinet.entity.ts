import { AdminCabinetEntity } from "src/admin-cabinet/entities/admin-cabinet.entity";
import { AvocatEntity } from "src/avocat/entities/avocat.entity";
import { ClientEntity } from "src/client/entities/client.entity";
import { StampsEntities } from "src/generics/stamps.entities.";
import { Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('cabinet')
export class CabinetEntity extends StampsEntities{
    @PrimaryGeneratedColumn()
    id:number;

    @OneToOne(() => AdminCabinetEntity,
            {
                cascade:true
            }
    )
    @JoinColumn()
    adminCabinet : AdminCabinetEntity

    @OneToMany(
        Type=> AvocatEntity,
        (avocat)=> avocat.cabinet,
        {
           eager:true,
           nullable:true,
           cascade:true
        }
    )
    avocats : AvocatEntity[]

    @ManyToMany(() => ClientEntity,
    {
        cascade:['insert','update'],
        nullable:true
    })
    @JoinTable()
    clients: ClientEntity[]
}
