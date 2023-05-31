import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import Transactions from '../entities/transactions.entity'

@Entity('users')
class Users{
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column()
    avatar: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany((type) => Transactions, transactions => transactions.user)
    transactions: Transactions[]

    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}

export default Users
