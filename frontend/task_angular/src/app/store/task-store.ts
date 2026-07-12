import { Service, signal, inject, Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../services/task.service';


// Makes available globally from one instance (the whole point of having a datastore)

@Injectable({
    providedIn: 'root'
})

// All the methods in this class have come from the components, as the app grows we've moved them off the components 
// and into a central store, the methods are identical, and still speak to the api. However now they're not scattered throughout the app
// making their own HTTP calls to the API. The store handles the taskservice, and we just inject taskstore. 

export class TaskStore {

   

    private readonly taskService = inject(TaskService); 
    
    readonly tasks = signal<Task[]>([])


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













}
