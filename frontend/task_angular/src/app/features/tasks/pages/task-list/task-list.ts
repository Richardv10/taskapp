import { Component, inject, OnInit, signal } from '@angular/core';
import { TaskService } from '../../../../services/task.service';
import { Task } from '../../../../model/Task';

@Component({
  selector: 'app-task-list',
  imports: [],
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
    
    // taskservice methods are now available, so we subscribe to the observable, I don't fully get this yet
    
    this.taskService.listTasks().subscribe( tasks => this.tasks.set(tasks));
  }

  

}
