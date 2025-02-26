import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../../../material/material.module';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule, 
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  menuItems = [
    { icon: 'home', text: 'Início', route: '/' },
    { icon: 'engineering', text: 'Ordens de Serviço', route: '/os' },
    { icon: 'person', text: 'Clientes', route: '/clientes' },
    { icon: 'settings', text: 'Configurações', route: '/config' },
    { icon: 'info', text: 'Sobre', route: '/about' }
  ];
}
