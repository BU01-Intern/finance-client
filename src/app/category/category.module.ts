import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role/role.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { RoleDetailComponent } from './role/role-detail/role-detail.component';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';




@NgModule({
  declarations: [
    RoleDetailComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TagModule,
    DividerModule,
    AvatarModule,
    DropdownModule
  ],
  exports: [RoleComponent, RoleDetailComponent]
})
export class CategoryModule { }
