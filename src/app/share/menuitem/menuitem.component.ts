import { Component, Input } from '@angular/core';
import { MenuItem } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: '[app-menuitem]',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss'],
})
export class MenuitemComponent {
  @Input() item!: MenuItem;

  @Input() root: boolean = true;

  constructor(private router: Router) {}

  isActiveRootMenuItem(menuitem: MenuItem): boolean {
    const url = this.router.url.split('#')[0];
    return !menuitem.children
      ? false
      : !menuitem.children.some(
          (item) =>
            item.routerLink === `${url}` ||
            (item.children &&
              item.children.some((it) => it.routerLink === `${url}`))
        );
  }
}
