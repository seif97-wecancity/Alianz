import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
//Core
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@modules/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Modules
import {
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule
} from 'ngx-ui-loader';

// import ngx-translate and the http loader
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Page401Component } from './views/pages/page401/page401.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, Page401Component],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot({}),
    NgxUiLoaderHttpModule.forRoot({
      loaderId: 'loader',
      showForeground: true,
      exclude: [],
    }),
    NgxUiLoaderRouterModule.forRoot({ loaderId: 'loader' }),
    // ngx-translate and the loader module
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,

  ],
  providers: [ ],
  exports: [NgxUiLoaderModule],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
