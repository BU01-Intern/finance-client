import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './category/contract/contract.component';
import { TechnologyComponent } from './category/contract/technology/technology.component';
const routes: Routes = [
  {path : '', component: ContractComponent},
  {path : 'Tech/:id', component: TechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
