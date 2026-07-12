import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stat-card',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css',
})
export class StatCard {

  // These are modern Angular22 signal inputs, you call them as functions in the template
  // This is an example of a simple component API, no component state management
  // Just displaying data, so can be reused and removed easily 
  readonly title = input.required<string>();

  readonly icon = input.required<string>();

  readonly value = input.required<number>();
}
