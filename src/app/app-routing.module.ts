import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './category/staff/detail/detail.component';
import { StaffComponent } from './category/staff/staff.component';

const routes: Routes = [{ path: '', component: MainComponent , children:[
  {path:'staff', component: StaffComponent},
  {path:'detail/:id', component: DetailComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  staff: StaffComponent | undefined;
  
}
