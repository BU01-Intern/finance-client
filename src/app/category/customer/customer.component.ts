import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Customer } from './Customer';
import * as XLSX from 'xlsx';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  originalCustomers: Customer[] = [];
  searchText: string = '';
  customers: Customer[] = [];
  numRows: Number = 0;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.originalCustomers  = [
      { id: 1, code: 'VTsfvdgxhdsafghsadfdghdsafghgS', name: 'Tổng côcszvdfbgdsafdghdsafdghadsfdggng ty giải pháp doanh nghiệp Viettel', group: 'Trong viettel', status: 'Hoạt động' },
      { id: 2, code: 'ABC', name: 'Công ty ABC', group: 'Ngoài Viettel', status: 'Không hoạt động' },
      { id: 3, code: 'XYZ', name: 'Công ty XYZ', group: 'Trong viettel', status: 'Hoạt động' },
      { id: 4, code: '123', name: 'Công ty 123', group: 'Ngoài Viettel', status: 'Không hoạt động' },
      { id: 5, code: 'DEF', name: 'Công ty DEF', group: 'Trong viettel', status: 'Không hoạt động' },
      { id: 6, code: 'VTS', name: 'Tổng công ty giải pháp doanh nghiệp Viettel', group: 'Trong viettel', status: 'Hoạt động' },
      { id: 7, code: 'ABC', name: 'Công ty ABC', group: 'Ngoài Viettel', status: 'Không hoạt động' },
      { id: 8, code: 'XYZ', name: 'Công ty XYZ', group: 'Trong viettel', status: 'Hoạt động' },
      { id: 9, code: '123', name: 'Công ty 123', group: 'Ngoài Viettel', status: 'Không hoạt động' },
      { id: 10, code: 'DEF', name: 'Công ty DEF', group: 'Trong viettel', status: 'Không hoạt động' },
      { id: 11, code: 'VTS', name: 'Tổng công ty giải pháp doanh nghiệp Viettel', group: 'Trong viettel', status: 'Hoạt động' },
      { id: 12, code: 'ABC', name: 'Công ty ABC', group: 'Ngoài Viettel', status: 'Không hoạt động' },
      { id: 13, code: 'XYZ', name: 'Công ty XYZ', group: 'Trong viettel', status: 'Hoạt động' },
      { id: 14, code: '123', name: 'Công ty 123', group: 'Ngoài Viettel', status: 'Không hoạt động' },
      { id: 15, code: 'DEF', name: 'Công ty DEF', group: 'Trong viettel', status: 'Không hoạt động' },
      { id: 16, code: 'VTS', name: 'Tổng công ty giải pháp doanh nghiệp Viettel', group: 'Trong viettel', status: 'Hoạt động' },
      { id: 17, code: 'ABC', name: 'Công ty ABC', group: 'Ngoài Viettel', status: 'Không hoạt động' },
      { id: 18, code: 'XYZ', name: 'Công ty XYZ', group: 'Trong viettel', status: 'Hoạt động' },
      { id: 19, code: '123', name: 'Công ty 123', group: 'Ngoài Viettel', status: 'Không hoạt động' },
      { id: 20, code: 'DEF', name: 'Công ty DEF', group: 'Trong viettel', status: 'Không hoạt động' },
    ];
    this.customers = this.originalCustomers;
    this.numRows = this.customers.length;
  }

  getTagSeverity(status: string): string {
    if (status === 'Hoạt động') {
        return 'success';
    } else if (status === 'Không hoạt động') {
        return 'danger';
    } else if (status === 'Tạm dừng') {
        return 'info';
    } else {
        return 'warning';
    }
  }

  exportToExcel() {
    const fileName = 'danh-sach-khach-hang.xlsx';
    const sheetName = 'Danh sách khách hàng';

    const data: any[][] = [
      ['#', 'Mã khách hàng', 'Tên khách hàng', 'Nhóm khách hàng', 'Trạng thái']
    ];

    this.customers.forEach((customer, index) => {
      data.push([
        index + 1,
        customer.code,
        customer.name,
        customer.group,
        customer.status
      ]);
    });

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    XLSX.writeFile(wb, fileName);
  }

  routerLink(customer: Customer) {
    this.router.navigate(['detail', customer.id], { relativeTo: this.route });
  }

  search() {
    if (this.searchText) {
      this.customers = this.filterCustomers(this.searchText);
      this.numRows = this.customers.length;
    } else {
      this.customers = this.originalCustomers;
      this.numRows = this.customers.length;
    }
  }

  filterCustomers(searchText: string): Customer[] {
    searchText = searchText.toLowerCase();
    return this.customers.filter(
      customer =>
        customer &&
        (customer.code && customer.code.toLowerCase().includes(searchText)) ||
        (customer.name && customer.name.toLowerCase().includes(searchText)) ||
        (customer.group && customer.group.toLowerCase().includes(searchText)) ||
        (customer.status && customer.status.toLowerCase().includes(searchText))
    );
  }
}
