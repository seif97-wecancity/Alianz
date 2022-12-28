import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@modules/shared.module';
import { PremiumComponent } from './premium.component';

const routes: Routes = [
  { path: '', component: PremiumComponent }
]
@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [PremiumComponent]
})
export class PremiumModule { }