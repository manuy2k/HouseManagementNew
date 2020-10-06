import { UserDataListService } from './../../../Services/user-data-list.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-mate-dialog',
  templateUrl: './edit-mate-dialog.component.html',
  styleUrls: ['./edit-mate-dialog.component.css']
})
export class EditMateDialogComponent implements OnInit {

  constructor(
    public dRef: MatDialogRef<EditMateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public _d: any,
    public usdServ: UserDataListService) {

     }

  ngOnInit() {

  }

  onNoClick(){
    this.dRef.close();
  }

  updateValues(updatedForm: NgForm){
    this.usdServ.updateData(updatedForm.value,this._d.ind);
    this.dRef.close();
  }

}
