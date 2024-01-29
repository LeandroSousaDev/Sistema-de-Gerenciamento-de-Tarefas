import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Task } from "./Task"
import { SubTask } from "./SubTasks"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[]

    @OneToMany(() => SubTask, (subTask) => subTask.user)
    subTask: SubTask
}