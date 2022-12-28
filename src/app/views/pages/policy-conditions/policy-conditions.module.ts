import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PolicyConditionsComponent } from './policy-conditions.component';
import { SharedModule } from '@modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PolicyConditionsComponent }];


@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [PolicyConditionsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class PolicyConditionsModule { }
