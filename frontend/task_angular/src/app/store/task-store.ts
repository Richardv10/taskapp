import { Service, signal, inject, Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs/internal/Observable';
import { of, tap } from 'rxjs';
import { CreateTaskRequest, } from '../model/create-task-request';
import { UpdateTaskRequest } from '../model/update-task-request'; 



// Makes available globally from one instance (the whole point of having a datastore)

@Injectable({
    providedIn: 'root'
})

// The first two methods in this class have come from the components, as the app grows we've moved them off the components 
// and into a central store, the methods are identical, and still speak to the api. However now they're not scattered throughout the app
// making their own HTTP calls to the API. The store handles the taskservice, and we just inject taskstore. 

export class TaskStore {

   

    private readonly taskService = inject(TaskService); 
    
    private readonly tasks = signal<Task[]>([]);



loadTasks(): void {

    this.taskService.listTasks().subscribe( tasks => this.tasks.set(tasks));
}

deleteTask(task: Task): void {

   
        this.taskService
        .deleteTask(task.id)
        .subscribe(() => {

            this.tasks.update(tasks =>
                tasks.filter(currentTask => currentTask.id !== task.id)
            )
        }

   )}


   // This is an attempt at a caching system, where taskstore checks to see if the task.id matches the id, if it does, return the cached task
   // If not, there's some funky pipe stuff (like stream in java), using tap, which can extract data without mutating it (unlike .map), 
   // and returns the unchanged Task. 
getTask(id: string): Observable<Task> {
    
    const cachedTask = this.tasks().find(task => task.id === id);

        if (cachedTask) {
            return of(cachedTask);
}

        return this.taskService.getTask(id).pipe(
            tap(task => {
                this.tasks.update(tasks => [...tasks, task]);
    })
);

}

// This just calls the taskservice methods same as the previous two, however. 
// The .pipe works like java streams, the tap can take the data without modifying the stream
// Finally calling the signal update API to update cache, the arrow function 
// inside the args, uses spread syntax to avoid mutating the OG array
// The database is updated with the (request), the last part is for the cache. 
createTask(request: CreateTaskRequest): Observable<Task> {
    return this.taskService.createTask(request).pipe(
        tap(task => {
            this.tasks.update(tasks => [...tasks, task]);
        })
    );
}
   
// The update is the same, except it populates the cache with the server response
// so immediately returns, then pipes that value, and does the tap thing.
// Except this time we can use .map


updateTask(id: string, request: UpdateTaskRequest): Observable<Task> {
    
    return this.taskService.updateTask(id, request).pipe(

        tap(updatedTask => {

            this.tasks.update(tasks => 
                tasks.map(task =>
                    task.id === updatedTask.id ? updatedTask : task)
            )
        
        
        })

    )



}













}
