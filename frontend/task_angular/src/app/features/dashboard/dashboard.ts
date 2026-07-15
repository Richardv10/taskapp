import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { StatCard } from '../../shared/components/stat-card';
import { TaskService } from '../../services/task.service';
import { Task } from '../../model/Task';
import { TaskStore } from '../../store/task-store';


@Component({
  selector: 'app-dashboard',
  imports: [StatCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  
  private readonly taskStore = inject(TaskStore);

  readonly totalTasks = this.taskStore.totalTasks;
  readonly todaysTasks = this.taskStore.todaysTasks;
  readonly completedTasks = this.taskStore.completedTasks;
  readonly overdueTasks = this.taskStore.overdueTasks;
  readonly completedCount = this.taskStore.completedCount;
  readonly overdueCount = this.taskStore.overdueCount;
  
  ngOnInit() {
    
  }




}
