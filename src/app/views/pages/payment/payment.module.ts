import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@modules/shared.module';
import { PaymentComponent } from './payment.component';

const routes: Routes = [
  { path: '', component: PaymentComponent }
]
@NgModule({
  imports: [
     SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [PaymentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaymentModule { }
