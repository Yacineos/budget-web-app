import { Component, Input } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { EnregistrementService } from '../enregistrement.service';
import { EnregistrementDataComponent } from '../enregistrement-data/enregistrement-data.component';

@Component({
  selector: 'app-modify-record',
  templateUrl: './modify-record.component.html',
  styleUrls: ['./modify-record.component.css']
})

export class ModifyRecordComponent {

  @Input() recordData: any;

  constructor(private db:Firestore , private enregistrementService: EnregistrementService , private enregitrementData:EnregistrementDataComponent) { }
  modifyData(f: any) {
    this.enregistrementService.showModify = false;
    this.enregistrementService.updateData(this.recordData.id,f);
    this.enregitrementData.showModify = false;
  }

  getCurrentUser(){
    this.enregistrementService.getCurrentUser();
  }
}
