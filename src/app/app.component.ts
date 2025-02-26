// Angular Core imports
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// Application imports
import { MaterialModule } from './material/material.module';
import { FooterComponent } from "./views/components/templates/footer/footer.component";
import { HeaderComponent } from './views/components/templates/header/header.component';
import { NavComponent } from './views/components/templates/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,    
    RouterLink,      
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Front-OS';
}
