import { IsBoolean, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    task: string;

    @IsBoolean()
    @Column({ default: false })
    done: boolean;
}
