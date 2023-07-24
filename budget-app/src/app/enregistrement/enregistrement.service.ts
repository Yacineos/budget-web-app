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

   @Injectable({
    providedIn: 'root'
   })

export class EnregistrementService {

  constructor(private db:Firestore) { }

  addData(f: any) {
    const collectionInstance = collection(this.db, 'enregistrement');
    console.log(collectionInstance);
    addDoc(collectionInstance, f.value)
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
  
}