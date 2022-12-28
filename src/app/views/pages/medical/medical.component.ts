import { Component, OnInit } from '@angular/core';
import { SharedService } from '@modules/shared.service';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  months = [1,2,3,4,5,6,7,8,9];

  constructor(private sharedService: SharedService) { }
  langAr: boolean = false

  ngOnInit() {

    if (localStorage.getItem('lang') as string == 'AR') {
      this.langAr = true
    }
    this.sharedService.imageSubSlideName =this.langAr ? 'medical-slide-ar' :  'medical-slide';
    this.sharedService.textSubSlide = this.langAr ? 'الآن دعنا نناقش معلوماتك الطبية' :  'Now let‘s discuss your medical information';
    this.sharedService.textSubSlideColor = '#4878bc ';

  }

}
