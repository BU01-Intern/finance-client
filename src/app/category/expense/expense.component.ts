import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Expense, ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ExpenseComponent implements AfterViewInit {
  first: number = 0;
  expenseDialog: boolean = false;
  formData: any;
  expenses!: Expense[];
  submitted: boolean = false;
  statuses = [
    { label: 'Hoạt động', value: 2 },
    { label: 'Tạm dừng', value: 1 },
    { label: 'Không hoạt động', value: 0 },
  ];
  totalRecord = 0;
  searchText = '';
  loading = true;

  @ViewChild('dt') tableRef!: Table;

  constructor(
    private expenseService: ExpenseService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngAfterViewInit() {
    this.loadExpenses();
  }

  loadExpenses(
    event: any = { first: this.tableRef._first, rows: this.tableRef._rows }
  ) {
    this.loading = true;
    let page = Math.floor(event.first / event.rows) + 1;
    let size = event.rows;
    let sorts: string[] = [];
    let currentSort = this.getCurrentSort();
    if (currentSort) {
      sorts.push(currentSort);
    }
    this.expenseService
      .searchExpense(this.searchText, page, size, sorts)
      .subscribe((res) => {
        this.expenses = res.data;
        this.totalRecord = res.totalRecord;
        this.loading = false;
      });
  }

  getCurrentSort(): string {
    let property = this.tableRef._sortField;
    if (!property) {
      return '';
    }
    let direction = this.tableRef._sortOrder === 1 ? 'ASC' : 'DESC';
    return property + '-' + direction;
  }

  openNewDialog() {
    this.formData = {
      id: 0,
      name: '',
      accountNumber: '',
      type: '',
      isDistributed: false,
      status: 0,
    };
    this.submitted = false;
    this.expenseDialog = true;
  }

  openEditDialog(expense: Expense) {
    this.formData = {
      id: expense.id,
      name: expense.name ? expense.name : '',
      accountNumber: expense.accountNumber ? expense.accountNumber : '',
      type: expense.type ? expense.type : '',
      isDistributed:
        expense.isDistributed !== null ? expense.isDistributed : false,
      status: expense.status ? expense.status : 0,
    };
    this.submitted = false;
    this.expenseDialog = true;
  }

  hideDialog() {
    this.expenseDialog = false;
    this.submitted = false;
  }

  onBasicUploadAuto() {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Auto Mode',
    });
  }

  deleteExpense(expense: Expense) {
    this.confirmationService.confirm({
      message: 'Bạn có chắc chắn muốn xóa ' + expense.name + '?',
      header: 'Xác nhận',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.expenseService.deleteExpense(expense.id).subscribe((data) => {
          console.log(data);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Expense Deleted',
            life: 3000,
          });
        });

        setTimeout(() => {
          this.loadExpenses();
        }, 3000);
      },
    });
  }

  saveExpense() {
    this.submitted = true;

    if (this.formData.name.trim() && this.formData.accountNumber) {
      if (this.formData.id) {
        this.expenseService
          .updateExpense(
            this.formData.id,
            this.formData.name,
            this.formData.accountNumber,
            this.formData.type,
            this.formData.isDistributed,
            this.formData.status
          )
          .subscribe((data) => {
            console.log(data);
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Expense Updated',
              life: 3000,
            });
          });
      } else {
        this.expenseService
          .createExpense(
            this.formData.name,
            this.formData.accountNumber,
            this.formData.type,
            this.formData.isDistributed,
            this.formData.status
          )
          .subscribe((data) => {
            console.log(data);
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Expense Created',
              life: 3000,
            });
          });
      }

      this.expenseDialog = false;
      setTimeout(() => {
        this.loadExpenses();
      }, 3000);
    }
  }

  exportToExcel() {
    window.open(`${this.expenseService.baseUrl}/download`, '_self');
  }

  getStatus(trang_thai: number): string {
    switch (trang_thai) {
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

  getSeverity(trang_thai: number) {
    switch (trang_thai) {
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
