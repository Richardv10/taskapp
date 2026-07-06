import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ReactiveFormsModule, FormBuilder, Validators, InputForm } from './input-form/input-form';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task_angular');
}

