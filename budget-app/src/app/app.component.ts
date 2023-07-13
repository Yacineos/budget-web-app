import { Component } from '@angular/core';
import { 
  Firestore,
  collection,
  addDoc,
  collectionData
 } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'budget-app';
  tableData!: Observable<any>;

  constructor(private db:Firestore) {
    this.readData();
   }

  addData(f: any) {
    const collectionInstance = collection(this.db, 'users');
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
    const collectionInstance = collection(this.db, 'users');
    /*
    collectionData(collectionInstance)
    .subscribe(val => {
      console.log(val);
    });
    */
    this.tableData = collectionData(collectionInstance);
  }
}
