import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface ContractElement {
  name: string;
  position: number;
  amount: number;
  creationDate: string;
  duration: string;
}

const CONTRACTLIST: ContractElement[] = [
  {position: 1, name: 'Na życie', amount: 150000, creationDate: '12.05.2016', duration: 'Dożywotnie'},
  {position: 2, name: 'Samochodowe', amount: 25000, creationDate: '31.01.2019', duration: '12 miesięcy'},
  {position: 3, name: 'Dom', amount: 300000, creationDate: '12.05.2016', duration: '60 miesięcy'}

];

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ContractsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'amount', 'creationDate', 'duration'];
  displayedColumnsNames: string[] = ['Numer', 'Typ ubezpieczenia', 'Kwota', 'Data zawarcia', 'Okres'];

  dataLoaded = false;
  dataLoadingStarted = false;

  expandedElement: any;
  dataSource = new MatTableDataSource<ContractElement>(CONTRACTLIST);


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
    this.dataLoaded = false;
    this.dataLoadingStarted = false;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayColumnName(columnCode: string) {
    let index = this.displayedColumns.indexOf(columnCode);
    return this.displayedColumnsNames[index];
  }

}
