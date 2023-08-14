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
    this.projectId = String(this.activateRoute.snapshot.paramMap.get('id'))
  }
  staffs: Member[] = []
  numStaffs = 0
  projectId: string = ""
  project: Project | undefined = {
    id: '',
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

    this.staffs = this.projectService.getMemberById(this.projectId);
    this.numStaffs = this.staffs.length;
    this.project = this.projectService.getProjectById(this.projectId);
    
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

