import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member, Role, RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.scss']
})
export class RoleDetailComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute, private roleService: RoleService) {
    this.roleId = String(this.activateRoute.snapshot.paramMap.get('id'))
  }
  employees: Member[] = []
  roleId: string = ""
  role: Role|undefined = {
    id: '',
    titleRole: '',
    projectRole: '',
    status: false,
    member: []
  }
  ngOnInit(): void {
    this.employees = this.roleService.getMemberByRoleId(this.roleId);
    this.role = this.roleService.getRoleById(this.roleId);
  }
  getSeverity(status: boolean|undefined) {
    if (status) {
      return "success"
    } else {
      return "danger"
    }
  }

  translateStatus(status: boolean) {
    if (status) {
      return "Đang làm việc"
    } else {
      return "Nghỉ"
    }
  }

  translateRoleStatus(status: boolean|undefined) {
    if (status) {
      return 'Hoạt động';
    }
    else return 'Không hoạt động'
  }
}

