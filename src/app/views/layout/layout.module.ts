import { NgModule } from '@angular/core';
import { SharedModule } from '@modules/shared.module';
import { TestComponent } from '../pages/test/test.component';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LoadersComponent } from './loaders/loaders.component';

@NgModule({
  imports: [LayoutRoutingModule, SharedModule],
  declarations: [
    BaseComponent,
    HeaderComponent,
    FooterComponent,
    LoadersComponent,
    TestComponent,
  ],

  exports: [
    BaseComponent,
    LoadersComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
  ],

})
export class LayoutModule { }
