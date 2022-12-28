import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '@modules/shared.service';
import { ErrorInterface } from 'app/core/interceptor/error.interface';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  SineIn: boolean = true;




  loginForm: FormGroup;
  submit: boolean = false;
  role: string = '';
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    public sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router,
    private ngxUiLoaderService: NgxUiLoaderService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
    });
  }

  get login() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    const lang = localStorage.getItem('lang');
    let headTag = this.document.getElementsByTagName(
      'head'
    )[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById(
      'langCss'
    ) as HTMLLinkElement;
    let bundleName = lang === 'AR' ? 'arabicStyle.css' : 'englishStyle.css';
    if (existingLink) existingLink.href = bundleName;
    else {
      let newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.type = 'text/css';
      newLink.id = 'langCss';
      newLink.href = bundleName;
      headTag.appendChild(newLink);

      let mainStyle = this.document.createElement('link');
      mainStyle.rel = 'stylesheet';
      mainStyle.type = 'text/css';
      mainStyle.id = 'langCss';
      mainStyle.href = 'style.css';
      headTag.appendChild(mainStyle);
    }
  }

  Save() {
      this.router.navigateByUrl('');

  }




}
