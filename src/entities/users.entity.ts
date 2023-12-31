import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Schedule } from "./schedules.entity";

@Entity("users")
export class User{

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", length: 45})
    name: string;

    @Column({type: 'varchar', length: 45, unique: true})
    email: string;

    @Column({type: "varchar", length: 120})
    password: string;

    @Column({default: false})
    admin: boolean;

    @CreateDateColumn({type: 'date'})
    createdAt: string;

    @UpdateDateColumn({type: 'date'})
    updatedAt: string;

    @DeleteDateColumn({type: 'date'})
    deletedAt: string;

    @OneToMany(() => Schedule, (s) => s.user)
    schedule: Schedule

    @BeforeInsert()
    @BeforeUpdate()
    hashedPassword(){
        const hasRounds: number = getRounds(this.password)
        if(!hasRounds){
            this.password = hashSync(this.password, 10)
        }
    }


}