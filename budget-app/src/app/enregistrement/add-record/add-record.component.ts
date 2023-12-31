import { Component } from '@angular/core';
import { 
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc
 } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EnregistrementService } from '../enregistrement.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent {
  
  selectedOption: string = "depense";

  constructor(private db:Firestore , private enregistrementService:EnregistrementService ) {
   
   }

  addData(f: any) {
    if(f.value.nature=="depense")
    f.value.montant = -f.value.montant;
    this.enregistrementService.addData(f);
  }
  updateData(id: string ) {
   
  }

  deleteData(id: string) {
    
  }
  getCurrentUser(){
    this.enregistrementService.getCurrentUser();
  }
}
