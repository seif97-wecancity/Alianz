import { Component, OnInit } from '@angular/core';
import { SharedService } from '@modules/shared.service';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {

  constructor(private sharedService:SharedService) { }
  langAr: boolean = false

  ngOnInit() {

    if (localStorage.getItem('lang') as string == 'AR') {
      this.langAr = true
    }
    this.sharedService.imageSubSlideName = this.langAr ? 'declaration-slide-ar' :  'declaration-slide';
    this.sharedService.textSubSlide =this.langAr ? 'الآن لننتهي من البيان' :  'Now let‘s finalize declaration';
    this.sharedService.textSubSlideColor = '#7974ae';
  }

}
