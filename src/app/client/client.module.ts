import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { ClientComponent } from './client.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  imports: [
    ClientRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
  ],
  declarations: [
    ClientComponent,
  ],
})
export class ClientModule {
}
