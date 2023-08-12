import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/Customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer | undefined;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const customerId = +params['id'];
      this.customer = this.customers.find(c => c.id === customerId);
    });
  }

  customers: Customer[] = [
    { id: 1, code: 'VTS', name: 'Tổng công ty giải pháp doanh nghiệp Viettel', group: 'Trong viettel', status: 'Hoạt động' },
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

  getDefaultIfUndefined(value: string | undefined, defaultValue: string): string {
    return value !== undefined ? value : defaultValue;
  }

}
