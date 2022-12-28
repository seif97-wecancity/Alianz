import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { OfferComponent } from './offer.component';
import { SharedModule } from '@modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: OfferComponent }];

@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [OfferComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class OfferModule { }
