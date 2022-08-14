import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from '../interfaces/menu-item';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class SidemenuComponent {
  activeModule:string = 'template';
  menuItems:  MenuItem[] = [];

  templateItems: MenuItem[] = [
    {
      text: 'Básicos',
      route: './template/basicos'
    },
    {
      text: 'Dinámicos',
      route: './template/dinamicos'
    },
    {
      text: 'Switches',
      route: './template/switches'
    }
  ]

  reactiveItems: MenuItem[] = [
    {
      text: 'Básicos',
      route: './reactive/basicos'
    },
    {
      text: 'Dinámicos',
      route: './reactive/dinamicos'
    },
    {
      text: 'Switches',
      route: './reactive/switches'
    }
  ]



  constructor(private _router: Router) { 


  }


}
