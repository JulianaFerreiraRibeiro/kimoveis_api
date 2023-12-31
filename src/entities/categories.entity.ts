import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstates.entity";

@Entity("categories")
export class Category{

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", length: 45, unique: true})
    name: string;

    @OneToMany(() => RealEstate, (re) => re.category)
    realEstate: RealEstate
}