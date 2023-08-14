import { Component, OnInit } from '@angular/core';
import { Contract, ContractdetailService, Customer, Tech } from 'src/app/service/contractdetail.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {

  constructor(private tech: ContractdetailService, private route: ActivatedRoute) {
    this.id = String(this.route.snapshot.paramMap.get('id'))
  }
  ngOnInit() {
    this.product= this.tech.getTechById(this.id);
    
    const temp1 = this.tech.getContractDetail(this.id);
    if(temp1) {
      this.contract = temp1;
    }
    
    this.customer = this.tech.getCustomerById(this.id);
    console.log(this.customer);
  }
  contract!:Contract
  customer!: Customer
  first: number = 0;
  rows: number = 10;
  product: Tech[] = [];
  id: string = '';
  getSeverity(status: any): string {
p    if (status === 'Hoạt động' || status === 0) {
      return 'success';
    } else if (status === 'Không hoạt động' || status === 1) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

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
}
interface Product {
  project: string;
  start: string;
  finish: string;
  status: string;
}