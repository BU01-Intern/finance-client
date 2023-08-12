import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { StaffserviceService } from 'src/app/staffservice/staffservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  constructor(
    private staffService: StaffserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.items = this.staffService.staffs;
  }

  dict: any = {};

  items: any[] = [];
  keys = ['name', 'email', 'org', 'title', 'status'];

  colnames: string[] = [
    'Nhân viên',
    'Email',
    'Đơn vị',
    'Chức danh',
    'Trạng thái',
  ];

  numRows: number = 0;
  options: number[] = [10, 25, 50];
  first: number = 0;

  ngOnInit(): void {
    this.keys.forEach((key, i) => (this.dict[key] = this.colnames[i]));
    this.numRows = this.items.length;
  }

  getSeverity(staff: any): string {
    if (!staff.status) {
      return 'danger';
    } else {
      return 'success';
    }
  }

  getStatus(status: boolean) {
    if (status) {
      return 'Hoạt động';
    } else {
      return 'Không hoạt động';
    }
  }
  exportToCSV() {
    const csvData: any[] = [];

    this.items.forEach((item) => {
      csvData.push({
        Name: item.name,
        ID: item.id,
        // 'Picture': item.picture,
        Email: item.email,
        Organization: item.org,
        Title: item.title,
        Status: item.status ? 'Active' : 'Inactive',
      });
    });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(csvData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'StaffData');

    XLSX.writeFile(wb, 'staff-data.csv');
  }
  onRowClick(id: string) {
    this.router.navigate(['detail', id], { relativeTo: this.route });
  }
}
