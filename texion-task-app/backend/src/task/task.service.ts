import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';


@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private usersRepository: Repository<Task>,) { }

  async create(createTaskDto: CreateTaskDto) {
    const createdTask = await this.usersRepository.create(createTaskDto)
    const savedTask = await this.usersRepository.save(createdTask)
    return savedTask
  }

  async findAll() {
    return await this.usersRepository.find()
  }

  async findOne(id: number) {
    const task = await this.usersRepository.findOne(id)
    if (!task) {
      throw new NotFoundException(`Task id ${task} not found`)
    }
    return task
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.findOne(id)
    updateTaskDto.done = updateTaskDto.done ? updateTaskDto.done : task.done
    updateTaskDto.task = updateTaskDto.task ? updateTaskDto.task : task.task

    return await this.usersRepository.save({
      id: task.id,
      task: updateTaskDto.task,
      done: updateTaskDto.done
    })
  }

  async remove(id: number) {
    const task = await this.findOne(id)
    return await this.usersRepository.remove(task)
  }
}
