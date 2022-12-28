import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@modules/shared.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
},
];

@NgModule({
  imports: [SharedModule, HttpClientModule, RouterModule.forChild(routes)],
  declarations: [	LoginComponent ],

})
export class AuthModule {}
