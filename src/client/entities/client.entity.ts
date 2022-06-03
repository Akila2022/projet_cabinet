import { UsersEntities } from "src/generics/users.entities.";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('client')
export class ClientEntity extends UsersEntities {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    type:string
}
