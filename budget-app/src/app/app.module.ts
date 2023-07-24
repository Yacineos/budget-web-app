import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AddRecordComponent } from './enregistrement/add-record/add-record.component';
import { ModifyRecordComponent } from './enregistrement/modify-record/modify-record.component';
import { EnregistrementDataComponent } from './enregistrement/enregistrement-data/enregistrement-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    ModifyRecordComponent,
    EnregistrementDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
