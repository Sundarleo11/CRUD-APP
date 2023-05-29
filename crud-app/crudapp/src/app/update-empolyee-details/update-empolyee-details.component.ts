import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';
import { Empolyee } from '../empolyee';


@Component({
  selector: 'app-update-empolyee-details',
  templateUrl: './update-empolyee-details.component.html',
  styleUrls: ['./update-empolyee-details.component.css']
})
export class UpdateEmpolyeeDetailsComponent implements OnInit {
 
  employee:Empolyee=new Empolyee();
  id:number;
  //, 
  constructor(private empservice:EmpServiceService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.empservice.getEmpolyeByID(this.id).subscribe(data=>{
      this.employee=data;
    },
   error => console.error("error"));

  }
  updateEmployee(){
    this.empservice.updateEmployee(this.id,this.employee).subscribe(data=>{
      console.log(data);
      this.employee=new Empolyee();
      this.goToEmployeeList();
    },error => console.error("error"));
  }

  onSubmit(){
   // this.updateEmployee();
   this.empservice.updateEmployee(this.id, this.employee).subscribe( data =>{
    this.goToEmployeeList();
  }
  , error => console.log(error));
    
  }
/*
  goToEmployeeList(){
   // this.router.navigate(['/employees']);
   this.router.navigate(['/employee'])
  }*/
  goToEmployeeList(){
    this.router.navigate['/employee']
  }


}
