import { NgModule } from '@angular/core';
import { NbCardModule, NbInputModule, NbButtonModule, NbSelectModule, NbTabsetModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbTabsetModule
  ],
  declarations: [
    UsersComponent,
  ],
})
export class UsersModule {
}
