import { Component, OnInit } from '@angular/core';
import { SharedService } from '@modules/shared.service';


@Component({
  selector: 'app-policy-conditions',
  templateUrl: './policy-conditions.component.html',
  styleUrls: ['./policy-conditions.component.css']
})
export class PolicyConditionsComponent implements OnInit {

  constructor(private sharedService:SharedService) { }
  langAr: boolean = false

  ngOnInit() {
    if (localStorage.getItem('lang') as string == 'AR') {
      this.langAr = true
    }
    this.sharedService.imageSubSlideName = this.langAr ? 'declaration-slide-ar' :  'declaration-slide-ar';
    this.sharedService.textSubSlide =this.langAr ? 'شروط الوثيقة' :  'شروط الوثيقة';
    this.sharedService.textSubSlideColor = '#7974ae';
  }

  }
