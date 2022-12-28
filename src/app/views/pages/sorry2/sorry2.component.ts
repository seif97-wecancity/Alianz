import { Component, OnInit } from '@angular/core';
import { SharedService } from '@modules/shared.service';

@Component({
  selector: 'app-sorry2',
  templateUrl: './sorry2.component.html',
  styleUrls: ['./sorry2.component.css'],
})
export class Sorry2Component implements OnInit {
  constructor(private sharedService: SharedService) {}
  langAr: boolean = false;

  ngOnInit() {}
}
