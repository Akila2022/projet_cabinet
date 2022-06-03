import { Type } from "class-transformer";
import { AdminCabinetEntity } from "src/admin-cabinet/entities/admin-cabinet.entity";
import { CabinetEntity } from "src/cabinet/entities/cabinet.entity";
import { ClientEntity } from "src/client/entities/client.entity";
import { UsersEntities } from "src/generics/users.entities.";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('avocat')
export class AvocatEntity extends  UsersEntities{

        @PrimaryGeneratedColumn()
        id:number;

        @Column()
        workExp : number;

        @Column()
        workNum: number;

        @Column()
        dis: boolean;

        @ManyToOne(
            Type => CabinetEntity,
            (adminCabinet) => adminCabinet.avocats,
            {
                cascade:['insert','update'],
                nullable:true
            }
        )
        cabinet : CabinetEntity

        @ManyToOne(
            Type => AdminCabinetEntity,
            (adminCabinet) => adminCabinet.avocats,
            {
                cascade:['insert','update'],
                nullable:true
            }
            )
        adminCabinet : AdminCabinetEntity;

        @ManyToMany(() => ClientEntity)
        @JoinTable()
        clients: ClientEntity[]
}
