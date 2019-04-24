import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logged = false;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {

    this.loginService.logged.subscribe((value) => {
      this.logged = value;
    });

  }

  logout() {

    this.router.navigateByUrl('/login');
    this.loginService.logged.next(false);

  }

  showContractSideBar() {

    return this.router.url.includes('contract');

  }


}
