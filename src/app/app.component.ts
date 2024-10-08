import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./shared/components/main/main.component";
import { SidenavComponent } from "./shared/components/sidenav/sidenav.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from "./shared/components/toolbar/toolbar.component";
import { Observable } from 'rxjs';
import {isLoggedIn, isLoggedOut} from './state/selectors/auth.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, SidenavComponent, NavbarComponent, CommonModule, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-template';

}
