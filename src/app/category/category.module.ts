import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ChipModule } from 'primeng/chip';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';
import { RoleComponent } from './role/role.component';
import { RoleDetailComponent } from './role/role-detail/role-detail.component';
import { StaffComponent } from './staff/staff.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DetailComponent } from './staff/detail/detail.component';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    CustomerDetailComponent,
    CustomerComponent,
    RoleDetailComponent,
    RoleComponent,
    StaffComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    CardModule,
    DividerModule,
    AvatarModule,
    AvatarGroupModule,
    ShareModule,
    TableModule,
    TagModule,
    InputTextModule,
    ChipModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    ScrollPanelModule,
    FormsModule,
  ],
  exports: [
    CustomerDetailComponent,
    CustomerComponent,
    RoleComponent,
    RoleDetailComponent,
    StaffComponent,
    DetailComponent,
  ],
})
export class CategoryModule {}
