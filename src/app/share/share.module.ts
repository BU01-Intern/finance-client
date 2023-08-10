import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { CostImplicationsComponent } from './cost-implications/cost-implications.component';
import { TagModule } from 'primeng/tag';
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
    CostImplicationsComponent,

  ],
  imports: [
    CommonModule,
    TableModule,
    TagModule,
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
    CostImplicationsComponent

  ],
  providers:[CostImplicationService]
})
export class ShareModule { }
