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
import { HttpClientModule } from '@angular/common/http';
import { BadgeModule } from 'primeng/badge';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { CostImplicationsComponent } from './cost-implications/cost-implications.component';

@NgModule({
  declarations: [
    CustomerDetailComponent,
    CustomerComponent,
    RoleDetailComponent,
    RoleComponent,
    StaffComponent,
    DetailComponent,
    CostImplicationsComponent,
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
    ToolbarModule,
    ToastModule,
    FileUploadModule,
    InputTextModule,
    BadgeModule,
    DropdownModule,
    PaginatorModule,
    DialogModule,
    ConfirmDialogModule,
    HttpClientModule,
  ],
  exports: [
    CustomerDetailComponent,
    CustomerComponent,
    RoleComponent,
    RoleDetailComponent,
    StaffComponent,
    DetailComponent,
    CostImplicationsComponent,
  ],
})
export class CategoryModule {}
