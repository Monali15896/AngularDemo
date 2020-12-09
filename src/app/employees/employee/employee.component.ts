import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
@Input() set formData(data:any){
  if(data){
    this._formData = data ;
  }
}
get formData():any{
  return this._formData;
}
private _formData :any ;
  constructor(public service : EmployeeService,
    public toastr:ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form ? : NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData={
      projectId:null,
      clientId:null,
      clientName:'',
       projectTypeId:null,
       projectName:'',
       startDate:null,
       endDate:null,
       defaultWeeklyHours:null,
       projectLogoName:''
    }
  }
  onSubmit(form:NgForm){
    if(form.value.projectId =null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postEmployee(form.value).subscribe(res=>{
      this.toastr.success('Insert project successfully','Emp.Project')
      this.resetForm(form);
      this.service.getEmployees();
    })
  }

  updateRecord(form:NgForm){
  this.service.UpdateEmployees(form.value).subscribe(res=>{
    this.toastr.info('Update project successfully','Emp.Project')
    this.resetForm(form);
    this.service.getEmployees();
  })
  }
}
