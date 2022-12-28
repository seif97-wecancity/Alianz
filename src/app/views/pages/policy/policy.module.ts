import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@modules/shared.module';
import { PolicyComponent } from './policy.component';

const routes: Routes = [
  { path: '', component: PolicyComponent }
]
@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [PolicyComponent]
})
export class PolicyModule { }
