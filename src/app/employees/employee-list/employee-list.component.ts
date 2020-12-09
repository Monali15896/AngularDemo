import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public listdata: Observable<any>;
  public emp:Object;
  public result: any;
  public errorMsg;
  
  
  constructor(public service: EmployeeService,public toastr:ToastrService) { }

  ngOnInit(): void {
    // this.listdata=this.service.refreshList();
    this.listdata = this.service.getEmployees()

    console.log('data', this.listdata);

  // this.emp = this.service.getEmployees()

  // console.log('data', this.emp);


    // this.service.getEmployees()
    // .subscribe(data => {this.emp = data; console.log(this.emp,"component");
    // },error => this.errorMsg = error);
    // console.log(this.emp); 
    
  }

  populateForm(emp :Employee){
    this.service.formData=Object.assign({},emp);
  }

  onDeleteForm(id:number){
    console.log(id);
      if(confirm('Are you sure the delete this record?')){
      this.service.deleteProject(id).subscribe(res=>{
        this.service.getEmployees();
        this.toastr.warning('deleted project successfully','Emp.Project')
      });
   }
  }
}
