// Angular Core imports
import { Component, EventEmitter, Output } from '@angular/core';

// Custom Material Module import
import { MaterialModule } from '../../../../material/material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();

  toggleSidenav(): void {
    this.menuToggle.emit();
  }
}
