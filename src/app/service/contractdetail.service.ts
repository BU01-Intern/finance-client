import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractdetailService {

  constructor() { }

  contracts: Contract[] = [
    {
      "code": "HD02",
      "name": "Hợp đồng ban công nghệ",
      "start": "15/06/2023",
      "finish": "01/12/2023",
      // "money" : "100.000.000 VNĐ",
      "status": 1,
      "tech": [
        {
          "project": "VSS_FINANCE_A",
          "start": "18/06/2023",
          "finish": "18/07/2023",
          "status": "Hoạt động"
        },
        {
          'project': "VSS_FINANCE_B",
          "start": "19/06/2023",
          "finish": "29/07/2023",
          "status": "Hoạt động"
        },
        {
          'project': "VSS_FINANCE_D",
          "start": "19/07/2023",
          "finish": "29/10/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000192',
        'name': 'Hoàng Thị Thu Thùy',
        "money" : "100.000.000 VNĐ",
      }
    },
    {
      "code": "HD01",
      "name": "Hợp đồng ban nhân sự",
      "start": "20/06/2023",
      "finish": "02/12/2023",
      // "money" : "200.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          "project": "VSS_FINANCE_C",
          "start": "21/06/2023",
          "finish": "18/09/2023",
          "status": "Hoạt động"
        },
        {
          'project': "VSS_FINANCE_D",
          "start": "21/09/2023",
          "finish": "30/10/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000193',
        'name': 'Nguyễn Minh Nguyệt',
        "money" : "200.000.000 VNĐ",
      }
    },
    {
      "code": "HD03",
      "name": "Hợp đồng ban kỹ thuật",
      "start": "25/07/2023",
      "finish": "08/08/2023",
      // "money" : "300.000.000 VNĐ",
      "status": 1,
      "tech": [
        {
          "project": "VSS_FINANCE_E",
          "start": "26/07/2023",
          "finish": "01/08/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000194',
        'name': 'Phạm Gia Huy',
        "money" : "300.000.000 VNĐ",
      }
    },
    {
      "code": "HD04",
      "name": "Hợp đồng ban công nghệ",
      "start": "01/06/2023",
      "finish": "01/11/2023",
      // "money" : "450.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          "project": "VSS_FINANCE_F",
          "start": "11/06/2023",
          "finish": "18/11/2023",
          "status": "Hoạt động"
        },
        {
          'project': "VSS_FINANCE_G",
          "start": "12/06/2023",
          "finish": "22/09/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000195',
        'name': 'Trần Đức Anh',
        "money" : "450.000.000 VNĐ",
      }
    },
    {
      "code": "HD05",
      "name": "Hợp đồng ban kế toán",
      "start": "23/05/2023",
      "finish": "30/11/2023",
      // "money" : "500.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          "project": "VSS_FINANCE_A",
          "start": "18/06/2023",
          "finish": "18/07/2023",
          "status": "Hoạt động"
        },
        {
          "project": "VSS_FINANCE_E",
          "start": "26/07/2023",
          "finish": "01/08/2023",
          "status": "Hoạt động"
        },
        
      ],
      "customer":
      {
        'code': '1000196',
        'name': 'Nguyễn Thanh Tùng',
        "money" : "500.000.000 VNĐ",
      }
    },
    {
      "code": "HD06",
      "name": "Hợp đồng ban kiểm toán",
      "start": "10/07/2023",
      "finish": "05/12/2023",
      // "money" : "150.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          'project': "VSS_FINANCE_B",
          "start": "19/06/2023",
          "finish": "29/07/2023",
          "status": "Hoạt động"
        },
        {
          'project': "VSS_FINANCE_G",
          "start": "12/06/2023",
          "finish": "22/09/2023",
          "status": "Hoạt động"
        },

        {
          "project": "VSS_FINANCE_C",
          "start": "21/06/2023",
          "finish": "18/09/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000197',
        'name': 'Võ Tuấn Minh',
        "money" : "150.000.000 VNĐ",
      }
    },
    {
      "code": "HD07",
      "name": "Hợp đồng ban tài chính",
      "start": "14/06/2023",
      "finish": "31/12/2023",
      // "money" : "600.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          "project": "VSS_FINANCE_A",
          "start": "18/06/2023",
          "finish": "18/07/2023",
          "status": "Hoạt động"
        },
        {
          "project": "VSS_FINANCE_C",
          "start": "21/06/2023",
          "finish": "18/09/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000198',
        'name': 'Nguyễn Phúc Lợi',
        "money" : "600.000.000 VNĐ",
      }
    },
    {
      "code": "HD08",
      "name": "Hợp đồng ban công nghệ",
      "start": "11/02/2023",
      "finish": "23/12/2023",
      // "money" : "650.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          'project': "VSS_FINANCE_B",
          "start": "19/06/2023",
          "finish": "29/07/2023",
          "status": "Hoạt động"
        },
        {
          "project": "VSS_FINANCE_F",
          "start": "11/06/2023",
          "finish": "18/11/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000199',
        'name': 'Bùi Quang Khải',
        "money" : "650.000.000 VNĐ",
      }
    },
    {
      "code": "HD09",
      "name": "Hợp đồng ban nhân sự",
      "start": "19/04/2023",
      "finish": "19/11/2023",
      // "money" : "150.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          "project": "VSS_FINANCE_A",
          "start": "18/06/2023",
          "finish": "18/07/2023",
          "status": "Hoạt động"
        },
        {
          "project": "VSS_FINANCE_E",
          "start": "26/07/2023",
          "finish": "01/08/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000200',
        'name': 'Đỗ Quang Minh',
        "money" : "150.000.000 VNĐ",
      }
    },
    {
      "code": "HD10",
      "name": "Hợp đồng ban kiểm toán",
      "start": "06/06/2023",
      "finish": "01/10/2023",
      // "money" : "350.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          'project': "VSS_FINANCE_D",
          "start": "21/09/2023",
          "finish": "30/10/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000201',
        'name': 'Nguyễn Tiến Đạt',
        "money" : "350.000.000 VNĐ",
      }
    },
    {
      "code": "HD11",
      "name": "Hợp đồng ban kế toán",
      "start": "15/03/2023",
      "finish": "23/10/2023",
      // "money" : "680.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          "project": "VSS_FINANCE_A",
          "start": "18/06/2023",
          "finish": "18/07/2023",
          "status": "Hoạt động"
        },
        {
          'project': "VSS_FINANCE_H",
          "start": "16/04/2023",
          "finish": "21/09/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000202',
        'name': 'Lưu Quang Huy',
        "money" : "680.000.000 VNĐ",
      }
    },
    {
      "code": "HD12",
      "name": "Hợp đồng ban kỹ thuật",
      "start": "17/02/2023",
      "finish": "28/12/2023",
      // "money" : "340.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          'project': "VSS_FINANCE_H",
          "start": "16/04/2023",
          "finish": "21/09/2023",
          "status": "Hoạt động"
        },
        {
          'project': "VSS_FINANCE_B",
          "start": "19/06/2023",
          "finish": "29/07/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000203',
        'name': 'Lương Xuân Ngọc',
        "money" : "340.000.000 VNĐ",
      }
    },
    {
      "code": "HD13",
      "name": "Hợp đồng ban công nghệ",
      "start": "15/05/2023",
      "finish": "23/12/2023",
      // "money" : "420.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          "project": "VSS_FINANCE_F",
          "start": "11/06/2023",
          "finish": "18/11/2023",
          "status": "Hoạt động"
        },
        {
          'project': "VSS_FINANCE_G",
          "start": "12/06/2023",
          "finish": "22/09/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000204',
        'name': 'Lê Thị Ninh',
        "money" : "420.000.000 VNĐ",
      }
    },
    {
      "code": "HD14",
      "name": "Hợp đồng ban tài chính",
      "start": "02/05/2023",
      "finish": "30/09/2023",
      // "money" : "710.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          "project": "VSS_FINANCE_E",
          "start": "26/07/2023",
          "finish": "01/08/2023",
          "status": "Hoạt động"
        },
        {
          'project': "VSS_FINANCE_G",
          "start": "12/06/2023",
          "finish": "22/09/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000205',
        'name': 'Hoàng Trà My',
        'money': '700.000.000 VNĐ',
      }
    },
    {
      "code": "HD15",
      "name": "Hợp đồng ban công nghệ",
      "start": "10/01/2023",
      "finish": "01/10/2023",
      // "money" : "420.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          "project": "VSS_FINANCE_A",
          "start": "18/06/2023",
          "finish": "18/07/2023",
          "status": "Hoạt động"
        },
        {
          'project': "VSS_FINANCE_B",
          "start": "19/06/2023",
          "finish": "29/07/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000206',
        'name': 'Nguyễn Minh Tuấn',
        'money':'420.000.000 VNĐ',
      }
    },
    {
      "code": "HD16",
      "name": "Hợp đồng ban kỹ thuật",
      "start": "11/06/2023",
      "finish": "11/12/2023",
      // "money" : "230.000.000 VNĐ",
      "status": 0,
      "tech": [
        {
          'project': "VSS_FINANCE_H",
          "start": "16/06/2023",
          "finish": "23/10/2023",
          "status": "Hoạt động"
        },
      ],
      "customer":
      {
        'code': '1000207',
        'name': 'Dương Văn Tiến',
        'money': '230.000.000 VNĐ',
      }
    },
  ]

  getTechById(code: string): Tech[]{
    const temp = this.contracts.find(contract => contract.code === code)
    if(temp) {
      return temp.tech;
    }
    return []
  }
  getContractDetail(code: string) {
    return this.contracts.find(contract => contract.code === code);
  }
  getCustomerById(code: string): Customer | any{
    const temp = this.contracts.find(contract => contract.code === code)
    if(temp) {
      return temp.customer;
    }
    return null;
  }
}
export interface Contract{
  code: string;
  name: string;
  start: string;
  finish: string;
  status: number;
  tech : Tech[];
  customer : Customer;
}
export interface Tech {
  project: string;
  start: string;
  finish: string;
  status: string;
}
export interface Customer {
  code: string;
  name: string;
  money: string;
}