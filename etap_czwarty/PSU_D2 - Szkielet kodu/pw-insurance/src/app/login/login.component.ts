import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './login.service';


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

  constructor(private router: Router, private loginService: LoginService) {
    this.emailFormEx = new FormControl('', Validators.email);
    this.passwordFormEx = new FormControl('', Validators.required);
  }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }



  login() {
    this.loginStarted = true;
    if(this.model.username==='test@pw.pl' && this.model.password==='test'){
      this.loginService.logged.next(true);
      this.router.navigateByUrl('/');
    }else{
      this.loginStarted = false;
      this.loginFinished = true;
      this.model.username= '';
      this.model.password= '';
      this.callbackMessage = 'Błędne dane logowania!';
    }
  }


}
