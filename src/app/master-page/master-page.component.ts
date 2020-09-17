import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MenuItem } from './entities/menu-item.entity';
import { Router } from '@angular/router';

/**
 * Componente para la vista master page.
 */
@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent {

  /**
   * Listado de items a renderizar en el menu.
   */
  public menuItems: MenuItem[] = [
    {
      text: 'Opcion 1',
      icon: 'done',
      divider: true,
      iconSvg: false,
      action: 'option1',
      url:'/master-page/option1'
    },
    {
      text: 'Opcion 2',
      icon: 'done',
      divider: false,
      iconSvg: false,
      action: 'option2',
      url:'/master-page/option2'
    }
  ];

  constructor(private router: Router) { }

  /**
   * Abre/cierra el menu.
   * @param matDrawer
   */
  public toggleMenu(matDrawer: MatDrawer): void {
    matDrawer.toggle();
  }

  /**
   * Deteccion de action desde el listado del menu.
   */
  public action(action: string, matDrawer: MatDrawer): void {
    matDrawer.toggle();

    switch (action) {
      case 'option1':
        this.redirectToOption1();
        break;
      case 'option2':
        this.redirectToOption2();
        break;

      default:
        break;
    }
  }

  /**
   * Redirecciona a la vista option 1.
   */
  private redirectToOption1(): void {
    this.router.navigate(['master-page/option1']);
  }

  /**
   * Redirecciona a la vista option 2.
   */
  private redirectToOption2(): void {
    this.router.navigate(['master-page/option2']);
  }

}
