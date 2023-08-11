import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';
import { ShareModule } from '../share/share.module';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DetailComponent } from './staff/detail/detail.component';
import { DividerModule } from 'primeng/divider';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
@NgModule({
  declarations: [
    StaffComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    TableModule,
    TagModule,
    DataViewModule,
    PaginatorModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    RouterModule,
    BreadcrumbModule,
  ],
  exports: [
    StaffComponent,
    DetailComponent
  ]
})
export class CategoryModule { }
