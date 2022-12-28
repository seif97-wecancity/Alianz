import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from '@modules/shared.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HomeInterface } from './home-interface';
let positions: any[] = [];
//@ts-ignore
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent implements OnInit, AfterViewInit {

  

  constructor(
    public sharedService: SharedService,
    private ngxUiLoaderService: NgxUiLoaderService,
    public router: Router,
  ) { }
  langEn: boolean = false
  ngOnInit() {
    this.ngxUiLoaderService.startLoader('loader1');
    if (localStorage.getItem('lang') as string == 'AR') {
      this.langEn = true
    }
  }

  ngAfterViewInit(): void {
    this.ngxUiLoaderService.stopLoader('loader1');
  }


  xx = true




  customLabelDropdownValue?: HomeInterface;

  telPrefixDemoData: HomeInterface[] = [
    {
      prefix:  'MR',
      prefixAr:  'أستاذ',
    },
    {
      prefix: 'MRS',
      prefixAr: 'أستاذة',
    },
    {
      prefix: 'MS',
      prefixAr: 'MS',
    },
  ];


}
