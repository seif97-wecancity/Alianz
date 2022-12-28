import { Component, OnInit } from '@angular/core';
import { SharedService } from '@modules/shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {

  constructor(private sharedService: SharedService) { }
  langAr: boolean = false

  ngOnInit() {

    if (localStorage.getItem('lang') as string == 'AR') {
      this.langAr = true
    }
    this.sharedService.imageSubSlideName =this.langAr ? 'payment-slide' :  'payment-slide';
    this.sharedService.textSubSlide = this.langAr ? 'تفاصيل القسط' :  'Your Premium Summary';
    this.sharedService.textSubSlideColor = '#48bbbc';

  }

}
