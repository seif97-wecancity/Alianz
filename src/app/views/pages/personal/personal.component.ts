import { Component, OnInit } from '@angular/core';
import { SharedService } from '@modules/shared.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  notSame = true;

  constructor(public sharedService: SharedService) { }
  langAr: boolean = false

  ngOnInit() {

    if (localStorage.getItem('lang') as string == 'AR') {
      this.langAr = true
    }



    this.sharedService.imageSubSlideName = this.langAr ? 'personal-slide-ar' : 'personal-slide';
    this.sharedService.textSubSlide = this.langAr ? 'أخبرنا الآن المزيد عن نفسك' : 'Now tell us more about yourself';
    this.sharedService.textSubSlideColor = '#5a3982';
  }

}
