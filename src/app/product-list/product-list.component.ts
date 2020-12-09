import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-product-list]',
  // templateUrl: './product-list.component.html',
  // styleUrls: ['./product-list.component.css']
  template:   `
 
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'" >you picked red color </div>
      <div *ngSwitchCase="'blue'" >you picked red color </div>
      <div *ngSwitchCase="'green'" >you picked red color </div>
      <div *ngSwitchDefault >you pick again </div>
    </div>
     
    <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
    </div>
`
})
export class ProductListComponent implements OnInit {

  // public name="";
  // public greeting="";
  // displayName=false;
  public color ="black";
  public colors=["red","blue","green"];
  constructor() { }

  ngOnInit(): void {
  }

  // onClick(){
  //   console.log("welcome page")
  //   this.greeting ='Welcome to over page';
  // }

  // logMessage(value){
  //   console.log(value); 
  // }
}

// <button (click)="onClick()">Click</button>
// <button (click)="greeting='welcome to user'">Click here!!!</button>
// {{greeting}}
// <input #myInput type="text">
// <button (click)="logMessage(myInput.value)">Log</button>
// <br>
// <input [(ngModel)]="name" type="text">
// {{name}}


// </h2>
//       <h2 *ngIf="displayName ; else elseBlock">
//       The CodeEvolution  
//     </h2>

//     <ng-template #elseBlock>
//       <h2>
//         Name is hidden
//       </h2>
//     </ng-template>