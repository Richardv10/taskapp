import { Component, OnInit, computed, signal } from '@angular/core';
import { StatCard } from '../../shared/components/stat-card';
import { TaskService } from '../../services/task.service';
import { Task } from '../../model/Task';


@Component({
  selector: 'app-dashboard',
  imports: [StatCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  readonly tasks = signal<Task[]>([]);
  
  ngOnInit() {
    
  }




}
