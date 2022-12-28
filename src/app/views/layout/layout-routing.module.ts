import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { TestComponent } from '../pages/test/test.component';
import { Page401Component } from './../pages/page401/page401.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@modules/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'medical',
        loadChildren: () =>
          import('@modules/medical.module').then((m) => m.MedicalModule),
      },
      {
        path: 'offer',
        loadChildren: () =>
          import('@modules/offer.module').then((m) => m.OfferModule),
      },
      {
        path: 'personal',
        loadChildren: () =>
          import('@modules/personal.module').then((m) => m.PersonalModule),
      },
      {
        path: 'declaration',
        loadChildren: () =>
          import('@modules/declaration.module').then((m) => m.DeclarationModule),
      },
      {
        path: 'print',
        loadChildren: () =>
          import('@modules/print.module').then((m) => m.PrintModule),
      },
      {
        path: 'u-w',
        loadChildren: () =>
          import('@modules/u-w.module').then((m) => m.UWModule),
      },
      {
        path: 'sorry',
        loadChildren: () =>
          import('@modules/sorry.module').then((m) => m.SorryModule),
      },
      {
        path: 'sorry2',
        loadChildren: () =>
          import('@modules/sorry2.module').then((m) => m.Sorry2Module),
      },
      {
        path: 'premium',
        loadChildren: () =>
          import('@modules/premium.module').then((m) => m.PremiumModule),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('@modules/payment.module').then((m) => m.PaymentModule),
      },
      {
        path: 'preview',
        loadChildren: () =>
          import('@modules/preview.module').then((m) => m.PreviewModule),
      },
      {
        path: 'policy',
        loadChildren: () =>
          import('@modules/policy.module').then((m) => m.PolicyModule),
      },
      {
        path: 'policy-conditions',
        loadChildren: () =>
          import('@modules/policy-conditions.module').then((m) => m.PolicyConditionsModule),
      },
      { path: 'test', component: TestComponent },
      { path: '401', component: Page401Component },
      { path: '404', component: ErrorPageComponent },
      { path: '**', component: ErrorPageComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutRoutingModule { }
