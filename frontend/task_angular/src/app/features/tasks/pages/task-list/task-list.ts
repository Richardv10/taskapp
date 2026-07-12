import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { TaskService } from '../../../../services/task.service';
import { Task } from '../../../../model/Task';
import { TaskStore } from '../../../../store/task-store' 

@Component({
  selector: 'app-task-list',
  imports: [RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})

// lifestyle hook ngInit is fine here due to scope

export class TaskList implements OnInit {

// New Taskstore Dependency Injection

private readonly taskStore = inject(TaskStore);

readonly tasks = this.taskStore.tasks;



// I've left the refactored code from the addition of TaskStore in this component, to see the results of the refactor and why. 
  
  // Inject dependency

  // private readonly taskService = inject(TaskService);
  
  // assign the signal to tasks, it's a function that provides the array, not the array itself call with tasks()
  // readonly tasks = signal<Task[]>([])
  
  
  
  ngOnInit(): void {
    

    // this.taskService.listTasks().subscribe( tasks => this.tasks.set(tasks));
    // The above is now replaced in TaskStore with a call to that instead.

    this.taskStore.loadTasks();
  }

  delete(task: Task) {
    
    if(!confirm("You sure you wanna do this?")) {
      return
    }
      
    this.taskStore.deleteTask(task)
   
  }
   
}
