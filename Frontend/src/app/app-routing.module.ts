import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { DocAuthGuardService } from './doc-auth-guard.service';

const routes: Routes = [
  {path:'admin',component:AdmindashComponent,canActivate:[AdminAuthGuardService]},
  {path :'appointmentlist',component:AppointmentComponent,canActivate:[AdminAuthGuardService]},
  {path : 'create-appointment',component:CreateAppointmentComponent,canActivate:[AdminAuthGuardService]},
  {path: 'home', component:HomeComponent},
  {path:'',redirectTo:'home' , pathMatch:'full'},
  {path: 'docdash', component:DocdashComponent,canActivate:[DocAuthGuardService]},
  {path:'create-patient', component:CreatePatientComponent, canActivate:[DocAuthGuardService]},
  {path: 'view-medicine',component:MedicineListComponent},
  {path: 'create-medicine', component:CreateMedicineComponent,canActivate:[DocAuthGuardService]},
  {path : 'update-patient/:id', component:UpdatePatientComponent,canActivate:[DocAuthGuardService]},
  {path: 'view-patient/:id', component:ViewPatientComponent ,canActivate:[DocAuthGuardService]},
  {path: 'update-medicine/:id',component: UpdateMedicineComponent,canActivate:[DocAuthGuardService]},
  {path: 'doclogin', component:DocloginComponent},
  {path: 'adlogin', component:AdminloginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
