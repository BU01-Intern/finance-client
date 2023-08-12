import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project, Staff, StaffserviceService } from 'src/app/staffservice/staffservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private staffService: StaffserviceService, private route: ActivatedRoute) {
    
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }

  dict: any = {};

  items: Project[] = [];
  keys = ['project', 'role', 'startDate', 'endDate', 'status'];

  colnames: string[] = ['Dự án', 'Vai trò', 'Ngày bắt đầu', 'Ngày kết thúc', 'Trạng thái'];

  numRows: number = 0;
  options: number[] = [10, 25, 50]
  first: number = 0;

  id: string = "";

  staff!: Staff;

  ngOnInit(): void {
    this.keys.forEach((key, i) => (this.dict[key] = this.colnames[i]));
    this.items = this.staffService.getProjectsByStaffId(this.id);
    this.numRows = this.items.length;
    let staffDetail = this.staffService.getDetailById(this.id); 
    if (staffDetail) {
      this.staff = staffDetail;
    }
  }

  getSeverity(prj: any): string {
    if (!prj.status) {
      return 'danger';
    } else {
      return 'success';
    }
  }

  translateStatus(status: boolean) {
    if (status) {
      return "Hoạt động"
    } else {
      return "Không hoạt động"
    }
  }

}
