import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ClientComponent } from './client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CommandesComponent } from './commandes/commandes.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path: '',
  component: ClientComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'products',
      component: ProductsComponent,
    },
    {
      path: 'commandes',
      component: CommandesComponent,
    },
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
}
