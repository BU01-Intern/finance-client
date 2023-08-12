import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { Member, Project, ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  first: number = 0;
  rows: number = 10;
  constructor(private activateRoute: ActivatedRoute, private projectService: ProjectService) {
    this.project_name = String(this.activateRoute.snapshot.paramMap.get('project_name'))
  }
  staffs: Member[] = []
  numStaffs = 0
  project_name: string = ""
  project: Project | undefined = {
    project_name: '',
    company: '',
    start_date: '',
    finish_date: '',
    pm: {
      name: '',
      image: ''
    },
    category: '',
    customer: '',
    status: false ,
    member: []
  }
  ngOnInit(): void {

    this.staffs = this.projectService.getMemberByName(this.project_name);
    this.numStaffs = this.staffs.length;
    this.project = this.projectService.getProjectByName(this.project_name);
    
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

  translateProjectStatus(status: boolean|undefined) {
    if (status) {
      return 'Hoạt động';
    }
    else return 'Không hoạt động'
  }
}

