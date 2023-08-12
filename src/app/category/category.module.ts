import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
//import primeng Module
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider'

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectDetailComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TagModule,
    BadgeModule,
    InputTextModule,
    AvatarModule,
    DividerModule
  ],
  exports: [
    ProjectComponent,
    ProjectDetailComponent
  ],
})
export class CategoryModule { }
