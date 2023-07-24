import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EnregistrementService } from '../enregistrement.service';

@Component({
  selector: 'app-enregistrement-data',
  templateUrl: './enregistrement-data.component.html',
  styleUrls: ['./enregistrement-data.component.css']
})
export class EnregistrementDataComponent {

  tableData!: Observable<any>;

  constructor(private enregistrementService: EnregistrementService) { 
    this.readData();
  }

  readData() {
    this.tableData =  this.enregistrementService.readData();
  }
  deleteData(id: string) {
    this.enregistrementService.deleteData(id);
  }
}
