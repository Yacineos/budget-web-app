import { Component } from '@angular/core';
import { 
  Firestore,
  collection,
  addDoc
 } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-app';

  constructor(private db:Firestore) { }

  addData(f: any) {
    console.log(f.value);
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
}
