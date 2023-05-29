import { Component, OnInit } from '@angular/core';
import { Empolyee } from '../empolyee';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  
  employee:Empolyee=new Empolyee();
  constructor(private empservice :EmpServiceService,
    private router:Router) { }

  saveEmployee(){
    this.empservice.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
     // this.goToEmployeeList();
    }),
   error=>console.log(error);
    
  }

  ngOnInit() {
  }

  goToEmployeeList(){
    this.router.navigate['/employee']
  }
  ngSubmit(){
    console.log(this.employee);
    this.saveEmployee();
   
  }
}
