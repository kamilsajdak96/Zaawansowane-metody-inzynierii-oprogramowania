import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  personData: string;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  logout() {
    this.router.navigateByUrl('/login');

  }

  navigateLogin() {
    this.router.navigate(['login']);
  }

  navigateItems() {
    this.router.navigate(['items']);
  }

  showItemSideBar() {

    if (this.router.url.includes('item')) {
      return true;
    } else {
      return false;
    }
  }

  showReservationSideBar() {

    if (this.router.url.includes('reservation')) {
      return true;
    } else {
      return false;
    }


  }

  showCheckOutSideBar() {

    if (this.router.url.includes('checkout')) {
      return true;
    } else {
      return false;
    }

  }

  showReportsSideBar() {

    if (this.router.url.includes('report')) {
      return true;
    } else {
      return false;
    }
  }

  showStocktakingSideBar() {

    if (this.router.url.includes('stocktaking')) {
      return true;
    } else {
      return false;
    }
  }

}
