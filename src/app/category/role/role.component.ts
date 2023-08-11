import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver'
import { RoleService } from 'src/app/service/role.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  constructor(private router: Router, private roleService: RoleService) {
  }

  roles = this.roleService.getRolesList()
  // [{ id: '1', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '2', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '3', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '4', titleRole: 'Member', projectRole: 'Admin', status: 'Active' },
  //   { id: '5', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '6', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '7', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '8', titleRole: 'Admin', projectRole: 'Member', status: 'Active' },
  //   { id: '9', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '10', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '11', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '12', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '13', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '14', titleRole: 'Admin', projectRole: 'Admin', status: 'Inactive' },
  //   { id: '15', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '16', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '17', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '18', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '19', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '20', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '21', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   { id: '22', titleRole: 'Admin', projectRole: 'Admin', status: 'Active' },
  //   ]
  numRows = this.roles.length;

  keys: string[] = ['id', 'titleRole', 'projectRole', 'status'];
  colnames: string[] = ['Mã roles', 'Roles chức danh', 'Roles dự án', 'Trạng thái'];
  dict: any = {};
  ngOnInit(): void {
    this.keys.forEach((key, i) => (this.dict[key] = this.colnames[i]));
  }

  findRoles(searchText: string) {
    this.roles = this.roleService.getRolesList()
    this.roles = this.roles.filter(role =>
      role &&
      (role.id && role.id.toLowerCase().includes(searchText)) ||
      (role.titleRole && role.titleRole.toLowerCase().includes(searchText)) ||
      (role.projectRole && role.projectRole.toLowerCase().includes(searchText))
    );
    this.numRows = this.roles.length;
  }

  getSeverity(status: boolean) {
    if (status) {
      return 'success'
    }
    else return 'danger'
  }

  translateStatus(status: boolean) {
    if (status) {
      return 'Hoạt động';
    }
    else return 'Không hoạt động'
  }

  navigateRoleDetail(id: string) {
    this.router.navigate(['/role/detail', id])
    console.log(id)
  }

  exportToCSV() {
    console.log('export to csv')
    const data: any[][] = [['Mã role', 'Roles dự án', 'Roles danh mục', 'Status']];
    const fileName = 'roles.xlsx';
    const sheetName = 'Danh sách Roles';

    this.roles.forEach(role => {
      data.push([role.id, role.titleRole, role.projectRole, role.status ? 'Hoạt động' : 'Không hoạt động'])
    })
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    XLSX.writeFile(wb, fileName);
  }

}
