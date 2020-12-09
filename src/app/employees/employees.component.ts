import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  formData 
  
  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
    this.formData = this.service.getByIdEmployees();
   
  }

}
