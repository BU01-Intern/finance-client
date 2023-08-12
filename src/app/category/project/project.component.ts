import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';
import * as XLSX from 'xlsx';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  constructor(private router: Router, private projectService: ProjectService, private route: ActivatedRoute) {
  }
  projects = this.projectService.getProjectsList();
  numRows = this.projects.length;
  keys: string[] = ['project_name', 'company', 'start_date', 'finish_date', 'pm', 'category', 'customer', 'status'];
  colnames: string[] = ['Dự án', 'Đơn vị', 'Ngày bắt đầu','Ngày kết thúc', 'PM','Loại dự án','Khách hàng','Trạng thái'];
  dict: any = {};

  ngOnInit(): void {
    this.keys.forEach((key, i) => (this.dict[key] = this.colnames[i]));
  }

  findProjects(searchText: string) {
    this.projects = this.projectService.getProjectsList()
    this.projects = this.projects.filter(project =>
      project &&
      (project.project_name && project.project_name.toLowerCase().includes(searchText)) ||
      (project.company && project.company.toLowerCase().includes(searchText)) ||
      (project.pm.name && project.pm.name.toLowerCase().includes(searchText)) ||
      (project.category && project.category.includes(searchText))||
      (project.customer && project.customer.toLowerCase().includes(searchText))||
      (project.start_date && project.start_date.includes(searchText))||
      project.finish_date && project.finish_date.includes(searchText)
    );
    this.numRows = this.projects.length;
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

  navigateProjectDetail(project_name: string) {
    this.router.navigate(['detail', project_name], { relativeTo: this.route })
  }

  exportToExcel() {
    const fileName = 'danh-sach-khach-hang.xlsx';
    const sheetName = 'Danh sách khách hàng';

    const data: any[][] = [
      ['#', 'Dự án', 'Đơn vị', 'Ngày bắt đầu', 'Ngày kết thúc', 'PM', 'Loại dự án', 'Khách hàng', 'Trạng thái']
    ];

    this.projects.forEach((project, index) => {
      data.push([
        index + 1,
        project.project_name,
        project.company,
        project.start_date,
        project.finish_date,
        project.pm.name,
        project.category,
        project.customer,
        project.status ? 'Hoạt động' : 'Không hoạt động'
      ]);
    });

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    XLSX.writeFile(wb, fileName);
  }
}



  