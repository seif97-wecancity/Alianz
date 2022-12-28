import { Component, OnInit } from '@angular/core';
import { SharedService } from '@modules/shared.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  constructor(public sharedService: SharedService) { }
  langAr: boolean = false

  ngOnInit() {

    if (localStorage.getItem('lang') as string == 'AR') {
      this.langAr = true
    }
    this.sharedService.imageSubSlideName =this.langAr ? 'payment-slide' :  'payment-slide';
    this.sharedService.textSubSlide = this.langAr ? 'Your Policy Summary' :  'Your Policy Summary';
    this.sharedService.textSubSlideColor = '#48bbbc';

  }

}
