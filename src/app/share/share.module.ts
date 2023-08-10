import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    TableComponent,
    MenuComponent,
    MenuitemComponent,
    TopbarComponent,
  ],
  imports: [CommonModule, TableModule, RouterModule, StyleClassModule],
  exports: [TableComponent, MenuComponent, TopbarComponent],
})
export class ShareModule {}
