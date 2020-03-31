import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { CommandesComponent } from './commandes.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule
  ],
  declarations: [
    CommandesComponent,
  ],
})
export class CommandesModule { }
