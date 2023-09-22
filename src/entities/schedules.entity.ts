import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity("schedules")
export class Schedule{

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "date"})
    date: string;

    @Column({type: "time"})
    hour: string;

    @ManyToOne(() => User, (u) => u.schedule)
    user: User

}