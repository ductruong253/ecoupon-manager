import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CustomerGroup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    groupName: string

    @Column()
    groupDescription: string

    @Column()
    phoneNum: string

    @Column()
    address: string

}