import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  emailFormEx: FormControl;
  passwordFormEx: FormControl;
  loginStarted = false;
  loginFinished = false;
  callbackMessage;

  model: any = {};

  constructor(private router: Router) {
    this.emailFormEx = new FormControl('', Validators.email);
    this.passwordFormEx = new FormControl('', Validators.required);
  }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }



  login() {
    this.loginStarted = true;
    if(this.model.username==='test@pw.pl' && this.model.password==='test'){
      this.router.navigateByUrl('/');
    }
  }


}
