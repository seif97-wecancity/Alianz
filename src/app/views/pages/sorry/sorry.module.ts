import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SorryComponent } from './sorry.component';
import { SharedModule } from '@modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: SorryComponent }];

@NgModule({
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [SorryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SorryModule { }
