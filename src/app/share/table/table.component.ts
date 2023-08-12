import { Component, Input, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Input() sortFunction: ((event: SortEvent) => void) | undefined;
  @Input() customSort: boolean = false;
  @Input() tableStyle: any = {};


  @Input() getStatusTagSeverity: ((status: string) => string) | undefined;

  constructor() {}

  ngOnInit(): void {}

  onCustomSort(event: SortEvent) {
    if (this.sortFunction) {
      this.sortFunction(event);
    }
  }
}
