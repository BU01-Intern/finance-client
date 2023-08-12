import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractdetailService } from 'src/app/service/contractdetail.service';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss'],
})
export class ContractComponent {
  constructor(
    private router: Router,
    private contract: ContractdetailService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.product = this.contract.contracts;
  }
  [x: string]: any;
  first: number = 0;
  rows: number = 10;
  product: any[] = [];
  // {code: 'HD765433', name: 'Hợp đồng ban công nghệ', start: '15/05/2023', finish: '15/09/2023', status: 0},
  //   {code: 'HD765434', name: 'Hợp đồng ban nhân sự', start: '16/05/2023', finish: '20/09/2023', status: 0},
  //   {code: 'HD765435', name: 'Hợp đồng ban quản lý', start: '17/05/2023', finish: '30/10/2023', status: 0},
  //   {code: 'HD765436', name: 'Hợp đồng ban kỹ thuật', start: '18/05/2023', finish: '16/09/2023', status: 0},
  //   {code: 'HD765437', name: 'Hợp đồng ban tài chính', start: '19/05/2023', finish: '30/09/2023', status: 0},
  //   {code: 'HD765438', name: 'Hợp đồng ban kế toán', start: '20/05/2023', finish: '30/09/2023', status: 0},
  //   {code: 'HD765439', name: 'Hợp đồng ban kiểm toán', start: '21/05/2023', finish: '01/09/2023', status: 0},
  //   {code: 'HD765440', name: 'Hợp đồng ban công nghệ', start: '22/05/2023', finish: '30/09/2023', status: 0},
  //   {code: 'HD765441', name: 'Hợp đồng ban công nghệ', start: '23/05/2023', finish: '30/12/2023', status: 0},
  //   {code: 'HD765442', name: 'Hợp đồng ban tiếp thị', start: '24/05/2023', finish: '27/09/2023', status: 0},
  //   {code: 'HD765443', name: 'Hợp đồng ban công nghệ', start: '25/05/2023', finish: '30/09/2023', status: 0},
  //   {code: 'HD765444', name: 'Hợp đồng ban bán hàng', start: '26/05/2023', finish: '30/06/2023', status: 0},
  //   {code: 'HD765445', name: 'Hợp đồng ban công nghệ', start: '27/05/2023', finish: '30/09/2023', status: 0},
  //   {code: 'HD765446', name: 'Hợp đồng ban công nghệ', start: '28/05/2023', finish: '30/09/2023', status: 0},
  //   {code: 'HD765447', name: 'Hợp đồng ban công nghệ', start: '30/05/2023', finish: '30/09/2023', status: 0},
  //   {code: 'HD765448', name: 'Hợp đồng ban công nghệ', start: '15/05/2023', finish: '30/09/2023', status: 0},
  //   {code: 'HD765449', name: 'Hợp đồng ban công nghệ', start: '15/06/2023', finish: '30/09/2023', status: 0},
  //   {code: 'HD765450', name: 'Hợp đồng ban công nghệ', start: '21/07/2023', finish: '30/09/2023', status: 0},
  //   {code: 'HD765451', name: 'Hợp đồng ban công nghệ', start: '20/04/2023', finish: '30/09/2023', status: 0},
  //   {code: 'HD765452', name: 'Hợp đồng ban công nghệ', start: '15/05/2023', finish: '30/09/2023', status: 0},
  //   {code: 'HD765453', name: 'Hợp đồng ban công nghệ', start: '15/05/2023', finish: '30/09/2023', status: 0},

  getStatus(status: number): string {
    switch (status) {
      case 0:
        return 'Hiệu lực';
      case 1:
        return 'Không hiệu lực';
      default:
        return '';
    }
  }
  getSeverity(status: number) {
    switch (status) {
      case 0:
        return 'success';
      case 1:
        return 'danger';
      default:
        return '';
    }
  }

  exportToExcel() {
    const fileName = 'danh-sach-hop-dong.xlsx';
    const sheetName = 'Danh sách hợp đồng';

    const data: any[][] = [
      [
        '#',
        'Mã hợp đồng',
        'Tên hợp đồng',
        'Ngày bắt đầu',
        'Ngày kết thúc',
        'Trạng thái',
      ],
    ];

    this.product.forEach((product, index) => {
      data.push([
        index + 1,
        // product.stt,
        product.code,
        product.name,
        product.start,
        product.finish,
        this.getStatus(product.status),
      ]);
    });

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  }

  onRowClick(id: string) {
    this.router.navigate(['detail', id], { relativeTo: this.route });
  }
}
interface Product {
  code: string;
  name: string;
  start: string;
  finish: string;
  status: number;
}
