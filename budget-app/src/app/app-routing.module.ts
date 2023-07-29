import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './enregistrement/add-record/add-record.component';
import { EnregistrementDataComponent } from './enregistrement/enregistrement-data/enregistrement-data.component';
import { ModifyRecordComponent } from './enregistrement/modify-record/modify-record.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add', component: AddRecordComponent },
  { path: 'data', component: EnregistrementDataComponent },
  { path: 'modify', component: ModifyRecordComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
