import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
  ],
  exports: [
    TableComponent,
  ],
})
export class ShareModule { }
