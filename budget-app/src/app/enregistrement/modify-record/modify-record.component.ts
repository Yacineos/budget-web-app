import { Component } from '@angular/core';

@Component({
  selector: 'app-modify-record',
  templateUrl: './modify-record.component.html',
  styleUrls: ['./modify-record.component.css']
})
export class ModifyRecordComponent {

  modifyData(f: any) {
    console.log(f.value);
  }
}
