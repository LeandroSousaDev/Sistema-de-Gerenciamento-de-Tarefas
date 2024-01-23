import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Task } from "./Task"

@Entity('subTasks')
export class SubTask {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    subTask: string

    @ManyToOne(() => Task, (task) => task.subTask)
    @JoinColumn({ name: 'task_id' })
    task: Task
}