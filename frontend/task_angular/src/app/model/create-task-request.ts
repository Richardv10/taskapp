import { Priority } from './priority';
import { Status } from './status';

export interface CreateTaskRequest {
    title: string;
    description: string;
    dueDate: string;
    priority: Priority; 
}