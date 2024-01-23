import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, } from "typeorm"
import { User } from "./User"
import { SubTask } from "./SubTasks"

@Entity('tasks')
export class Task {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    task: string

    @Column()
    deadline: string

    @Column()
    status: string

    @ManyToOne(() => User, (user) => user.tasks)
    @JoinColumn({ name: 'user_id' })
    user: User

    @OneToMany(() => SubTask, (subTask) => subTask.task)
    subTask: SubTask[]
}