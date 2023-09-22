import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { Schedule } from "./schedules.entity";

@Entity("realEstates")
export class RealEstate{

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "boolean", default: false})
    sold: boolean;

    @Column({type: "decimal", default: 0, precision: 12, scale: 2})
    value: number | string;

    @CreateDateColumn({type: "date"})
    createdAt: string;

    @UpdateDateColumn({type: "date"})
    updatedAt: string;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, (c) => c.realEstate)
    category: Category

    @OneToMany(() => Schedule, (s) => s.realEstate)
    schedules: Schedule[]

}