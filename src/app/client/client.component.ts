import { Component } from '@angular/core';

import { MENU_ITEMS } from './client-menu';

@Component({
  selector: 'ngx-client',
  styleUrls: ['client.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class ClientComponent {

  menu = MENU_ITEMS;
}
