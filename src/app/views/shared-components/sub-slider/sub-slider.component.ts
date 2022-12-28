import { Component, OnInit } from '@angular/core';
import { SharedService } from '@modules/shared.service';

@Component({
  selector: 'app-sub-slider',
  templateUrl: './sub-slider.component.html',
  styleUrls: ['./sub-slider.component.css']
})
export class SubSliderComponent implements OnInit {

  constructor(public sharedService:SharedService) { }

  ngOnInit() {
  }

}
