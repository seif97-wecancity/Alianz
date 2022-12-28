import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ErrorInterface } from '../interceptor/error.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  imageSubSlideName: string = ''
  textSubSlide: string = ''
  textSubSlideColor: string = ''

  otherLang: string = '';
  constructor(
    private router: Router,
    private ngxUiLoaderService: NgxUiLoaderService
  ) { }
  // logout function
  logout() {
    localStorage.setItem('lang' , 'EN' )
     this.router.navigateByUrl('/login');
  }
  // handleError from request . .
  handleError(error: ErrorInterface) {
    if (error.code == 401) {
       this.router.navigate(['/login'], {
        queryParams: { returnUrl: this.router.routerState.snapshot.url },
      });
    }
    if (error.code == 404) {
      this.router.navigate(['/404'], {
        queryParams: { returnUrl: this.router.routerState.snapshot.url },
      });
    }
    this.ngxUiLoaderService.stopLoader('loader');
  }



}
