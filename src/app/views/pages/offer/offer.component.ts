import { Component, OnInit } from '@angular/core';
import { SharedService } from '@modules/shared.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(public sharedService: SharedService) { }
  langAr: boolean = false

  ngOnInit() {

    if (localStorage.getItem('lang') as string == 'AR') {
      this.langAr = true
    }
    this.sharedService.imageSubSlideName = this.langAr ? 'offer-slide-ar' : 'offer-slide';
    this.sharedService.textSubSlide = this.langAr ? 'الآن دعنا نناقش عرض التأمين' :  'Now let‘s discuss your offer';
    this.sharedService.textSubSlideColor = '#4f8e85';

  }

}
