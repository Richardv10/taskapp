import { Service } from '@angular/core';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/Task';
import { Observable } from 'rxjs/internal/Observable';
import { CreateTaskRequest } from '../model/create-task-request';
import { UpdateTaskRequest } from '../model/update-task-request';

//Makes the injectable available to the whole app (root)
@Injectable({

  providedIn: 'root'

})


export class TaskService {

    // This line injects the HttpClient into TaskService
    private readonly http = inject(HttpClient);

    // Base Url of the API
    private readonly apiUrl = "http://localhost:8080/api/v1/tasks";

    // API Methods

    listTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl);
    }

    createTask(request: CreateTaskRequest): Observable<Task> {
        return this.http.post<Task>(this.apiUrl, request);
    }

    updateTask(taskId: string, request: UpdateTaskRequest): Observable<Task> {
        return this.http.put<Task>(`${this.apiUrl}/${taskId}`, request);
    }

    deleteTask(taskId: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${taskId}`);
    }

    getTask(taskId: string): Observable<Task> {
        return this.http.get<Task>(`${this.apiUrl}/${taskId}`);
    }

}
