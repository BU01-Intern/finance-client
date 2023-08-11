import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './category/role/role.component';
import { RoleDetailComponent } from './category/role/role-detail/role-detail.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{ path: '', component: MainComponent, children:[
  {path:'role', component:RoleComponent},
  {path:'role/detail/:id', component:RoleDetailComponent}
] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
