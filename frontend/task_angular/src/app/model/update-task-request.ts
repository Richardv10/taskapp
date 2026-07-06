import { Priority } from './priority';
import { Status } from './status';

export interface updateTaskRequest {
    title: string;
    description: string;
    dueDate: string;
    priority: Priority;
    status: Status;

}