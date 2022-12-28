import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progres-bar',
  templateUrl: './progres-bar.component.html',
  styleUrls: ['./progres-bar.component.css']
})
export class ProgresBarComponent implements OnInit {

  testStepsData = [
    'Personal Information',
    'UW Questions',
    'Medical',
    'Offer Information',
    'Premium',
    'Declaration',
    'Payment',
    'Policy'
  ];
  langAr: boolean = false
  constructor() { }

  ngOnInit() {

    if (localStorage.getItem('lang') as string == 'AR') {
      this.langAr = true
      this.testStepsData = [
        'البيانات الشخصية',
        'استقصاء',
        'معلومات طبية',
        'بيانات العرض',
        'القسط',
        'إقرارات',
        'الدفع',
        'الوثيقة'
      ];
    }
  }



}
