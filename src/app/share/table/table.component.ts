import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() items!: any[];
  @Input() keys!: string[];
  @Input() colnames!: string[];
  dict: any = {};

  constructor() {}

  ngOnInit(): void {
    this.keys.forEach((key, i) => (this.dict[key] = this.colnames[i]));
  }
}
