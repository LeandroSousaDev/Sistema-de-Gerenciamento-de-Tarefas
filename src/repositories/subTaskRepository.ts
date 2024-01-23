import { AppDataSource } from "../data-source";
import { SubTask } from "../entities/SubTasks";

export const subTaskRepository = AppDataSource.getRepository(SubTask)