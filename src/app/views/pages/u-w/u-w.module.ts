import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@modules/shared.module';
import { UWComponent } from './u-w.component';
const routes: Routes = [{ path: '', component: UWComponent }];

@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [UWComponent],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UWModule { }
