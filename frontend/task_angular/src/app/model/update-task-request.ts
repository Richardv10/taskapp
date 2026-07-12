import { Priority } from './priority';
import { Status } from './status';

export interface UpdateTaskRequest {
    title: string;
    description: string;
    dueDate: string;
    priority: Priority;
    status: Status;

}