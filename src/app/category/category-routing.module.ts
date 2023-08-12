import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { RoleComponent } from './role/role.component';
import { RoleDetailComponent } from './role/role-detail/role-detail.component';
import { StaffComponent } from './staff/staff.component';
import { DetailComponent } from './staff/detail/detail.component';

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
      {
        path: 'role',
        data: {
          breadcrumb: 'Vai trò',
        },
        children: [
          {
            path: '',
            component: RoleComponent,
            data: {
              breadcrumb: null,
            },
          },
          {
            path: 'detail/:id',
            component: RoleDetailComponent,
            data: {
              breadcrumb: 'Chi tiết',
            },
          },
        ],
      },
      {
        path: 'staff',
        data: {
          breadcrumb: 'Nhân sự',
        },
        children: [
          {
            path: '',
            component: StaffComponent,
            data: {
              breadcrumb: null,
            },
          },
          {
            path: 'detail/:id',
            component: DetailComponent,
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
