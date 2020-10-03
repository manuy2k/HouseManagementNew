import { UserDataListService } from './../../../Services/user-data-list.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-mate-dialog',
  templateUrl: './delete-mate-dialog.component.html',
  styleUrls: ['./delete-mate-dialog.component.css']
})
export class DeleteMateDialogComponent implements OnInit {

  constructor(
    public dRef:MatDialogRef<DeleteMateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public _d: any,
    public udls: UserDataListService
  ) { }

  ngOnInit() {
  }
  chesiSav(v){
    if(v==0){
      this.udls.deleteData(this._d.ind)
      this.dRef.close();
    }
    if(v==1){
      this.dRef.close();
    }
    this.dRef.close();
  }

}
