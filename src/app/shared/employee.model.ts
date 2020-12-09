// export class Employee {

    
//         clientId :number
//         projectTypeId :number
//         defaultWeeklyHours :number
        
//         clientName :string
//         projectName :string
//         projectLogoName :string
        
//         startDate :Date
//         endDate :Date
        
        
// }

export class Employee {

    
        public projectId:number;
        public  clientId :number;
        public  projectTypeId :number;
        public  defaultWeeklyHours :number;
          
        public  clientName :string;
        public  projectName :string;
        public  projectLogoName :string;
          
        public  startDate :Date;
        public endDate :Date;
          
          
          constructor(
                projectId:number,
                clientId :number,
                projectTypeId :number,
                defaultWeeklyHours :number,
                clientName :string,
                projectName :string,
                projectLogoName :string,
                startDate :Date,
                endDate :Date) {  

                this.projectId=projectId;  
                this.clientId=clientId;
                this.clientName=clientName;
                this.projectTypeId=projectTypeId;
                this.defaultWeeklyHours=defaultWeeklyHours;
                this.projectName=projectName;
                this.projectLogoName=projectLogoName;
                this.startDate=startDate;
                this.endDate=endDate;
          }
         
  }
