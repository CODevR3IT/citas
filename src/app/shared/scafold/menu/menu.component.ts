import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menu } from '../../interfaces/menu.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  public menus: Menu[] = [
    { label: 'Inicio', iconClass: 'ti ti-home', route: '/', hasSubmenu: false, hasChildren: false },
    
  ];

  closeDropdown(event: Event) {
   
    const target = event.target as HTMLElement;
    const dropdown = target.closest('#parentDropdown');
    if (dropdown) {
      const dropdownToggle = dropdown.previousElementSibling as HTMLElement;
      if (dropdownToggle && dropdownToggle.classList.contains('dropdown-toggle')) {
        dropdownToggle.click(); // Simula un clic para cerrar el dropdown
      }
    }
  }
}
