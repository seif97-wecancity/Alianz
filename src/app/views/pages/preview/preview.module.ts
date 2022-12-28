import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@modules/shared.module';
import { PreviewComponent } from './preview.component';


const routes: Routes = [
  { path: '', component: PreviewComponent }
]
@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [PreviewComponent]
})
export class PreviewModule { }
