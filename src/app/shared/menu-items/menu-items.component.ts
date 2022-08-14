import { Component, Input } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html'
})
export class MenuItemsComponent {

  @Input() menuItems: MenuItem[] = []

  

}
