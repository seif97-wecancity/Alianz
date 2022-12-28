import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclarationComponent } from './declaration.component';
import { SharedModule } from '@modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: DeclarationComponent }];

@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [DeclarationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class DeclarationModule { }
