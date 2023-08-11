import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Danh mục' },
    children: [
      { path: '', redirectTo: 'customer', pathMatch: 'full' },
      {
        path: 'customer',
        data: {
          breadcrumb: 'Khách hàng',
        },
        children: [
          {
            path: '',
            component: CustomerComponent,
            data: {
              breadcrumb: null,
            },
          },
          {
            path: 'detail/:id',
            component: CustomerDetailComponent,
            data: {
              breadcrumb: 'Chi tiết',
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}