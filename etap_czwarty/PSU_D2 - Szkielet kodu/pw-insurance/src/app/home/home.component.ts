import {Component, OnDestroy, OnInit} from '@angular/core';

import {Router, RouterModule} from '@angular/router';

export interface InsuranceElement {
  name: string;
  position: number;
  amount: number;
  other: string;
}

export interface PaymentElement {
  insurance: string;
  number: number;
  amount: number;
  deadline: string;
}

const INSURANCES: InsuranceElement[] = [
  {position: 1, name: 'Na życie', amount: 150000, other: 'Brak'},
  {position: 2, name: 'Samochodowe', amount: 13000, other: 'Brak'},
  {position: 3, name: 'Dom', amount: 300000, other: 'Brak'}

];

const PAYMENTS: PaymentElement[] = [
  {number: 6, insurance: 'Na życie', amount: 39.99, deadline: '16 maj 2019'},
  {number: 7, insurance: 'Na życie', amount: 39.99, deadline: '16 czerwiec 2019'},
  {number: 8, insurance: 'Samochodowe', amount: 1349.99, deadline: '23 czerwiec 2019'}

];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  dateToShow;
  displayedColumnsInsurance: string[] = ['position', 'name', 'amount', 'other'];
  displayedColumnsPayment: string[] = ['number', 'insurance', 'amount', 'deadline'];
  dataSourceInsurance = INSURANCES;
  dataSourcePayment = PAYMENTS;

  constructor(private router: Router) {
  }

  ngOnInit() {
    let date = new Date();
    this.dateToShow = "  "+date.getDate()+" / "+(date.getMonth()+1)+" / "+date.getFullYear();
    }


}
