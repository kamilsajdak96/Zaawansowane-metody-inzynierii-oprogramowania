import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-reload',
  templateUrl: './extend.component.html',
  styleUrls: ['./extend.component.css']
})
export class ExtendComponent implements OnInit {

  itemChecked = false;
  reservingStarted = false;

  constructor(private router: Router,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.itemChecked = true;

  }

  reserveItem() {
    this.openSuccessSnackBar();
    this.router.navigateByUrl('/home');
  }

  openSuccessSnackBar() {
    this.snackBar.open('Umowa została przedłużona prawidłowo!', 'Ok', {
      duration: 5000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'end'
    });
  }


}
