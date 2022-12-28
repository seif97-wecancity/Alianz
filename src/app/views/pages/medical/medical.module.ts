import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MedicalComponent } from './medical.component';
import { SharedModule } from '@modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: MedicalComponent }];

@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [MedicalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class MedicalModule { }
