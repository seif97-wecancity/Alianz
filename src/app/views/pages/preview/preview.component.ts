import { Component, OnInit } from '@angular/core';
import { SharedService } from '@modules/shared.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private sharedService: SharedService) { }
  langAr: boolean = false

  ngOnInit() {

    if (localStorage.getItem('lang') as string == 'AR') {
      this.langAr = true
    }
    this.sharedService.imageSubSlideName =this.langAr ? 'payment-slide' :  'payment-slide';
    this.sharedService.textSubSlide = this.langAr ? 'Your Preview Summary' :  'Your Preview Summary';
    this.sharedService.textSubSlideColor = '#48bbbc';
  }


}
