import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empolyee } from '../empolyee';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
   id:number
   employee:Empolyee
  constructor(private router:ActivatedRoute,private employeeservice:EmpServiceService) { }

  ngOnInit() {
   this.id= this.router.snapshot.params['id'];
    this.employee=new Empolyee
    this.employeeservice.getEmpolyeByID(this.id).subscribe(data=>{
      this.employee=data;
    })
  }

}
