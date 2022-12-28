import { Component, OnInit } from '@angular/core';
import { SharedService } from '@modules/shared.service';

@Component({
  selector: 'app-u-w',
  templateUrl: './u-w.component.html',
  styleUrls: ['./u-w.component.css']
})
export class UWComponent implements OnInit {

  constructor(private sharedService: SharedService) { }
  langAr: boolean = false

  ngOnInit() {

    if (localStorage.getItem('lang') as string == 'AR') {
      this.langAr = true
    }
    this.sharedService.imageSubSlideName = this.langAr ? 'declaration-slide-ar' :  'declaration-slide';
    this.sharedService.textSubSlide = this.langAr ? 'أسئلة الاكتتاب' :  'Underwriting questions';
    this.sharedService.textSubSlideColor = '#4878bc ';

  }
}
