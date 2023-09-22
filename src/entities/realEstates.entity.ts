import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}