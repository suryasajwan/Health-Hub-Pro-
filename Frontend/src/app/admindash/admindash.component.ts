import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  
  patients:Patient[]=[];
  constructor(private paitentService:PatientService,private adminAtuhService:AdminauthService,private router:Router){}
  ngOnInit():void{
    this.getPatients();
  }


  getPatients(){
    this.paitentService.getPaitentList().subscribe(data=>{
    this.patients=data;
    })
  }

  delete(id:number){
    this.paitentService.delete(id).subscribe(data=>{
      console.log(data)
      this.getPatients();
    })
  }

  logout(){
    this.adminAtuhService.logout();
    this.router.navigate(['home'])

  }

}
