import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, } from "typeorm"
import { User } from "./User"

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

}