import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CostImplicationService } from './cost-implication.service';
import { CostImplication } from 'src/app/share/cost-implications/cost_implication';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-cost-implications',
  templateUrl: './cost-implications.component.html',
  styleUrls: ['./cost-implications.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class CostImplicationsComponent implements OnInit {
  first: number = 0;
  rows: number = 10;
  clickMessage = '';
  costImplicationDialog: boolean = false;
  cost_implication!: CostImplication;
  cost_implications!: CostImplication[];
  submitted: boolean = false;
  statuses!: any[];
  constructor(
    private costImplication: CostImplicationService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  search() {
    this.cost_implications = this.filtercost_implications(this.searchText);
    this.numRows = this.cost_implications.length;
  }
  filtercost_implications(searchText: string): CostImplication[] {
    searchText = searchText.toLowerCase();
    return this.cost_implications.filter(
      cost_implication =>
        cost_implication &&
        (cost_implication.khoan_muc && cost_implication.khoan_muc.toLowerCase().includes(searchText)) ||
        (cost_implication.so_tai_khoan && cost_implication.so_tai_khoan.toLowerCase().includes(searchText)) ||
        (cost_implication.loai_chi_phi && cost_implication.loai_chi_phi.toLowerCase().includes(searchText)) ||
        (cost_implication.status && cost_implication.status.toLowerCase().includes(searchText))
    );
  onClick() {
    this.clickMessage = 'You are my hero!';
  }
  ngOnInit() {
    this.costImplication
      .getCostImplications()
      .then((data) => (this.cost_implications = data));

    this.statuses = [
      { label: 'Hoạt động', value: 2 },
      { label: 'Tạm dừng', value: 1 },
      { label: 'Không hoạt động', value: 0 },
    ];
  }
  openNew() {
    this.cost_implication = {};
    this.submitted = false;
    this.costImplicationDialog = true;
  }
  hideDialog() {
    this.costImplicationDialog = false;
    this.submitted = false;
  }
  editCostImplications(cost_implication: CostImplication) {
    this.cost_implication = { ...cost_implication };
    this.costImplicationDialog = true;
  }
  deletetCostImplications(cost_implication: CostImplication) {
    this.confirmationService.confirm({
      message: 'Bạn có chắc chắn muốn xóa ' + cost_implication.khoan_muc + '?',
      header: 'Xác nhận',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cost_implications = this.cost_implications.filter(
          (val) => val.id !== cost_implication.id
        );
        this.cost_implication = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Cost Implication Deleted',
          life: 3000,
        });
      },
    });
  }
  saveCostImplications() {
    this.submitted = true;

    if (this.cost_implication.khoan_muc?.trim()) {
      if (this.cost_implication.id) {
        this.cost_implications[this.findIndexById(this.cost_implication.id)] =
          this.cost_implication;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Cost Implication Updated',
          life: 3000,
        });
      } else {
        this.cost_implication.id = this.createId();
        this.cost_implications.push(this.cost_implication);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Cost Implication Created',
          life: 3000,
        });
      }

      this.cost_implications = [...this.cost_implications];
      this.costImplicationDialog = false;
      this.cost_implication = {};
    }
  }
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.cost_implications.length; i++) {
      if (this.cost_implications[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  exportToExcel() {
    const fileso_tai_khoan = 'danh-sach-khoan-muc-chi-phi.xlsx';
    const sheetso_tai_khoan = 'Danh sách khoản mục chi phí';

    const data: any[][] = [
      [
        '#',
        'Khoản mục',
        'Số tài khoản',
        'Loại chi phí',
        'Loại phân bổ',
        'Trạng thái',
      ],
    ];

    this.cost_implications.forEach((cost_implication, index) => {
      data.push([
        index + 1,
        cost_implication.khoan_muc,
        cost_implication.so_tai_khoan,
        cost_implication.loai_chi_phi,
        cost_implication.loai_phan_bo,
        this.getstatus(cost_implication.status ? cost_implication.status : 0 ),
      ]);
    });

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetso_tai_khoan);
    XLSX.writeFile(wb, fileso_tai_khoan);
  }
  getstatus(status: number): string {
    switch (status) {
      case 0:
        return 'Không hoạt động';

      case 2:
        return 'Hoạt động';

      case 1:
        return 'Tạm dừng';
      default:
        return '';
    }
  }
  getSeverity(status: number) {
    switch (status) {
      case 0:
        return 'danger';

      case 2:
        return 'success';

      case 1:
        return 'warning';
      default:
        return '';
    }
  }
}
