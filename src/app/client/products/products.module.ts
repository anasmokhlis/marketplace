import { NgModule } from '@angular/core';
import { NbCardModule, NbInputModule, NbButtonModule, NbSelectModule, NbTabsetModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ProductsComponent } from './products.component';

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
    ProductsComponent,
  ],
})
export class ProductsModule {
}
