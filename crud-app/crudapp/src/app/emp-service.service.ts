import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empolyee } from './empolyee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
 
  private baseURL=`http://localhost:8080/api/v1/employees`;
  private posturl=`http://localhost:8080/api/v1/saveEmployee`;
  constructor(private httpclient:HttpClient) { }

  getEmpList():Observable<Empolyee[]>{
  //  return this.httpclient.get<Empolyee[]>('${this.baseURL}');
    return this.httpclient.get<any>(`${this.baseURL}`);
  }

  createEmployee(employee:Empolyee):Observable<any>{
    return this.httpclient.post(`${this.posturl}`,employee);
  }

  getEmpolyeByID(id:number):Observable<Empolyee>{
     return this.httpclient.get<Empolyee>(`${this.baseURL}/${id}`);
  }
  updateEmployee(id: number, employee: Empolyee): Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, employee);
  }

   DeleteEmployee(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
}
