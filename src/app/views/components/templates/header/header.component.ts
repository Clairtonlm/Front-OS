// Angular Core imports
import { Component, EventEmitter, Output } from '@angular/core';

// Custom Material Module import
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../../../material/material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();

  toggleSidenav(): void {
    this.menuToggle.emit();
  }
}
