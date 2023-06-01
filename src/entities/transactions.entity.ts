import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import Users from './users.entity'

@Entity('transactions')
class Transactions{
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column()
    description: string

    @Column()
    amount: number

    @Column()
    type: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne((type) => Users,{
        eager: true, nullable: false
    })
    user: Users

    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}

export default Transactions