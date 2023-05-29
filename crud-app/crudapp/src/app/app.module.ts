import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpolyeeListComponent } from './empolyee-list/empolyee-list.component';
import { AppRoutingModule } from './app.routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmpolyeeDetailsComponent } from './update-empolyee-details/update-empolyee-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpolyeeListComponent,
    CreateEmployeeComponent,
    UpdateEmpolyeeDetailsComponent,
    EmployeeDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
