import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("customers")
class Customer {
    @PrimaryColumn()
    id?: string;

    @Column()
    fullName: string;

    @Column()
    gender: string;

    @CreateDateColumn()
    birth: Date;

    @Column()
    age: number;

    @Column()
    city: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Customer };