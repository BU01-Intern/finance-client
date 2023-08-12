import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
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
    TableComponent,
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
    TableComponent,
  ],
})
export class ShareModule { }
