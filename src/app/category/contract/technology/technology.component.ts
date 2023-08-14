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
  customer!: Customer
  first: number = 0;
  rows: number = 10;
  product: Tech[] = [];
  id: string = '';
  ngOnInit() {
    this.product= this.tech.getTechById(this.id);
    
    const temp1 = this.tech.getContractDetail(this.id);
    if(temp1) {
      this.contract = temp1;
    }
    
    this.customer = this.tech.getCustomerById(this.id);
    console.log(this.contract);
  }
  contract!:Contract

  getSeverity(status: any): string {
    if (status === 0) {
      return 'success';
    } else if (status === 1) {
      return 'danger';
    }
    return '';
  }
  getStatus(status: number): string {
    if(status === 0 ){
      return 'Hiệu lực'
    }
    return 'Không hiệu lực'
  }
}
interface Product {
  project: string;
  start: string;
  finish: string;
  status: string;
}