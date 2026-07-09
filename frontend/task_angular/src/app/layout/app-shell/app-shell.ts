import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { NAVIGATION } from '../../navigation/navigation.config';


@Component({
  selector: 'app-app-shell',
  standalone: true,
  imports: [MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, RouterLink, RouterOutlet, MatListModule, MatDividerModule],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
})
export class AppShell {

  protected readonly navigation = NAVIGATION;
}
