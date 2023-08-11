import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ContractComponent } from './contract/contract.component';
import { TagModule } from 'primeng/tag';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TechnologyComponent } from './contract/technology/technology.component';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';


@NgModule({
  declarations: [
    ContractComponent,
    TechnologyComponent,
  ],
  imports: [
    CommonModule,
    TagModule,
    PaginatorModule,
    InputTextModule,
    ButtonModule,
    BadgeModule,
    DynamicDialogModule,
    DividerModule,
    AvatarModule,
    TableModule
  ],
  exports: [
    ContractComponent,
    TechnologyComponent,
  ],
})
export class CategoryModule { }
