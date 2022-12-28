import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PersonalComponent } from './personal.component';
import { SharedModule } from '@modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: PersonalComponent }];

@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [PersonalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class PersonalModule { }
