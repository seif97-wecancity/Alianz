import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sorry2Component } from './sorry2.component';
import { SharedModule } from '@modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: Sorry2Component }];

@NgModule({
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [Sorry2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Sorry2Module { }
