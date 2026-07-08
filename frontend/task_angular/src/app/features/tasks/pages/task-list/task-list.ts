import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../../../services/task.service';
import { Task } from '../../../../model/Task';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})

// lifestyle hook ngInit is fine here due to scope

export class TaskList implements OnInit {



  
  // Inject that dependency

  private readonly taskService = inject(TaskService);
  
  //assign the signal to tasks, it's a function that provides the array, not the array itself call with tasks()
  readonly tasks = signal<Task[]>([])
  
  
  
  ngOnInit(): void {
    
    // task service methods are now available, so we subscribe to the observable, I don't fully get this yet

    this.taskService.listTasks().subscribe( tasks => this.tasks.set(tasks));
  }

   delete(task: Task): void {

    if(!confirm("You sure you wanna do this?")) {
      return
    }
        this.taskService
        .deleteTask(task.id)
        .subscribe(() => {

            this.tasks.update(tasks =>
                tasks.filter(currentTask => currentTask.id !== task.id)
            )
        }

   )}

   

   
}
