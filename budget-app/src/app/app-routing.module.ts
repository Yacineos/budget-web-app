import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './enregistrement/add-record/add-record.component';
import { EnregistrementDataComponent } from './enregistrement/enregistrement-data/enregistrement-data.component';
import { ModifyRecordComponent } from './enregistrement/modify-record/modify-record.component';

const routes: Routes = [
  { path: 'add', component: AddRecordComponent },
  { path: '', component: EnregistrementDataComponent },
  { path: 'modify', component: ModifyRecordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
