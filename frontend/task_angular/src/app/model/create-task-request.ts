import { Priority } from './priority';
import { Status } from './status';

export interface createTaskRequest {
    title: string;
    description: string;
    dueDate: string;
    priority: Priority; 
}