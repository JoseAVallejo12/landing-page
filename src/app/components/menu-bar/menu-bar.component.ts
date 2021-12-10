import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  constructor() {}

  personal = `
    $menuBg: orange;
    $menuBorder: 0 none;
  `;

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
      },
      {
        label: 'Nosotros',
        icon: 'pi pi-fw pi-users',
        routerLink: 'nosotros',
      },
      {
        label: 'Proyectos',
        icon: 'pi pi-fw pi-cog',
        routerLink: 'proyectos',
      },
      {
        label: 'Contacto',
        icon: 'pi pi-fw pi-phone',
        routerLink: 'contacto',
      },
      {
        label: 'Publicaciones',
        icon: 'pi pi-fw pi-file',
        routerLink: 'blogs',
      },
    ];
  }
}
