import { Component, OnInit } from '@angular/core';
import { Empolyee } from '../empolyee';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empolyee-list',
  templateUrl: './empolyee-list.component.html',
  styleUrls: ['./empolyee-list.component.css']
})
export class EmpolyeeListComponent implements OnInit {

  employee:Empolyee[];
  
  constructor(private empservice:EmpServiceService, private router:Router) { }
 
  ngOnInit(){

   this.getemployeee();
  /* this.employee=[{
      "id":101,
      "firstname":"sundar",
      "lastname":"kumar",
      "emailid":"abc@gmail.com"
    },{
      "id":102,
      "firstname":"somu",
      "lastname":"kumar",
      "emailid":"somu@gmail.com"
    }];
    */

    
  }
 private getemployeee(){
 
  this.empservice.getEmpList().subscribe(data=>{
    this.employee=data;
  });
 

 }
 ViewEmp(id:number){
  this.router.navigate(['employee-details',id]);
 }
 updateEmp(id:number){
  this.router.navigate(['update-employee',id]);
 }
 DeleteEmp(id:number){
  this.empservice.DeleteEmployee(id).subscribe(data=>{
    //this.employee=data;
    this.getemployeee();
  })
 }
 
  
}
