import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { ClientComponent } from './client.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductsModule } from './products/products.module'
import { CommandesModule } from './commandes/commandes.module'
import { UsersModule } from './users/users.module';
import { ClientRoutingModule } from './client-routing.module';
// import { UsersComponent } from './users/users.component';
// import { ProductsComponent } from './products/products.component';
// import { CommandesComponent } from './commandes/commandes.component';

@NgModule({
  imports: [
    ClientRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ProductsModule,
    CommandesModule,
    UsersModule
  ],
  declarations: [
    ClientComponent,
    // UsersComponent,
    // ProductsComponent,
    // CommandesComponent,
  ],
})
export class ClientModule {
}
