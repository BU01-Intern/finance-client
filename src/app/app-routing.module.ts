import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './category/project/project.component';
import { ProjectDetailComponent } from './category/project/project-detail/project-detail.component';

const routes: Routes = [
  {path: '', component: ProjectComponent},
  {path: 'detail/:project_name', component: ProjectDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
