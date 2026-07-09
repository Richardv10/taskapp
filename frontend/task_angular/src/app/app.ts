import { Component, inject, signal } from '@angular/core';
import { AppShell } from './layout/app-shell/app-shell';



@Component({
  selector: 'app-root',
  imports: [AppShell],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task_angular');
}

