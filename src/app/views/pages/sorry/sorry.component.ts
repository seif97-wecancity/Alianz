import { Component, OnInit } from '@angular/core';
import { SharedService } from '@modules/shared.service';

@Component({
  selector: 'app-sorry',
  templateUrl: './sorry.component.html',
  styleUrls: ['./sorry.component.css']
})
export class SorryComponent implements OnInit {

  constructor(private sharedService: SharedService) { }
  langAr: boolean = false

  ngOnInit() {
  }

}
