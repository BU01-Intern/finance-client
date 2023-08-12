import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { TopbarComponent } from './topbar/topbar.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CostImplicationsComponent } from './cost-implications/cost-implications.component';
import { TagModule } from 'primeng/tag';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule} from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { BadgeModule} from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule} from 'primeng/dialog';
import { CostImplicationService } from './cost-implications/cost-implication.service';
import { ConfirmDialogModule} from 'primeng/confirmdialog';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    TableComponent,
    MenuComponent,
    MenuitemComponent,
    TopbarComponent,
    BreadcrumbComponent,
    CostImplicationsComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    StyleClassModule,
    AvatarModule,
    AvatarGroupModule,
    TagModule,
    BreadcrumbModule,
    ToolbarModule,
    ToastModule,
    FileUploadModule,
    InputTextModule,
    BadgeModule,
    DropdownModule,
    PaginatorModule,
    DialogModule,
    ConfirmDialogModule,
    HttpClientModule
  ],
  exports: [
    TableComponent,
    MenuComponent,
    TopbarComponent,
    BreadcrumbComponent,
    CostImplicationsComponent
  ],
  providers:[CostImplicationService]
})
export class ShareModule {}
