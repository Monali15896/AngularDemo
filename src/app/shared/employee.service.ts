import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient} from '@angular/common/http'
import { Observable, from} from 'rxjs';
import { IEmployee } from './employee';
import {  catchError, map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData:Employee;
  list:Employee[];
  readonly rootUrl="http://192.168.43.69/api/"

  constructor(private http:HttpClient) { }

  postEmployee(formData:Employee){
    return this.http.post(this.rootUrl +'Projects',formData);

  }

  // refreshList(){
  //   this.http.get(this.rootUrl +'Projects/'+'Client-Project')
  //   .toPromise().then(res=>this.list=res as Employee[]);
  // }

  getEmployees():Observable<any>{

       return this.http.get<any>(this.rootUrl +'Projects/'+'Client-Project').pipe(map((data:any)=>{return data.result}))

    }

  getByIdEmployees():Observable<Employee>{

      return this.http.get<any>(this.rootUrl +'Projects/'+1011).pipe(map((data:any)=>{return data.result}))

   }

   UpdateEmployees(formData:Employee){

    return this.http.put(this.rootUrl +'Projects/'+this.formData.projectId,this.formData);
  }

  deleteProject(id:number){
    return this.http.delete(this.rootUrl +'Projects/'+id);
  }
}
