import { Injectable } from '@angular/core';
import { 
    Firestore,
    collection,
    addDoc,
    collectionData,
    doc,
    updateDoc,
      deleteDoc
   } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

   @Injectable({
    providedIn: 'root'
   })

export class EnregistrementService {

  private f : any ;
  showAdd: boolean = false;
  showModify: boolean = false;

  constructor(private db:Firestore, private authService:AuthService) { }

  async addData(f: any) {
    const collectionInstance = collection(this.db, 'enregistrement');
    const uid = await this.authService.getCurrentUser();
    console.log(uid);
    const fData = f.value;  
    const data = {fData , uid};
    addDoc(collectionInstance, data)
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch((error) => {
      console.log('Error writing document: '+ error);
    }
    );
    console.log('Data added');
  }

  readData() {
    const collectionInstance = collection(this.db, 'enregistrement');
    return collectionData(collectionInstance, {idField: 'id'});
  }

  deleteData(id: string) {
    const collectionInstance = collection(this.db, 'enregistrement');
    const documentInstance = doc(collectionInstance, id);
    deleteDoc(documentInstance);
  }
  
  updateData(id: string, f: any) {
    const collectionInstance = collection(this.db, 'enregistrement');
    const documentInstance = doc(collectionInstance, id);
    updateDoc(documentInstance, f.value);
  }

  getCurrentUser(){
    return this.authService.getCurrentUser();
  }
  
}