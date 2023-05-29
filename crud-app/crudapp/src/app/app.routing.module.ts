import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { Empolyee } from './empolyee-list/empolyee-list.component';
import { EmpolyeeListComponent } from './empolyee-list/empolyee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmpolyeeDetailsComponent } from './update-empolyee-details/update-empolyee-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
const routes: Routes = [
 {path:'employee', component:EmpolyeeListComponent},
 {path:'create-employees', component:CreateEmployeeComponent},
 {path:'update-employee/:id', component:UpdateEmpolyeeDetailsComponent},
 {path:'employee-details/:id', component:EmployeeDetailsComponent},
 {path:'' ,redirectTo:'employees', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }