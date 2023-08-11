import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CustomerDetailComponent } from './category/customer-detail/customer-detail.component';
import { CustomerComponent } from './category/customer/customer.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      breadcrumb: null,
    },
    children: [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
