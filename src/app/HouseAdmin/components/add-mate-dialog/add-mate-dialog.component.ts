import { UserDataListService } from './../../../Services/user-data-list.service';
import { Dataformat } from './../../dataformat';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-mate-dialog',
  templateUrl: './add-mate-dialog.component.html',
  styleUrls: ['./add-mate-dialog.component.css']
})
export class AddMateDialogComponent implements OnInit {

  dialogData: Dataformat = {
   id:123,
   firstName: "Manu",
   lastName:"Chandra",
   email: "example@ex.com",
   phone: 12345,
   role: "mate"
  };
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  role: string = '';
  constructor(
    public _dRef: MatDialogRef<AddMateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: Dataformat,
    public serviceAcc: UserDataListService
  )
  { }

  ngOnInit() {
  }

  onNoClick():void{
    this._dRef.close();
  }

  getValues(temp:NgForm){
      this.dialogData.firstName = temp.value.firstName;
      this.dialogData.lastName = temp.value.lastName;
      this.dialogData.email = temp.value.email;
      this.dialogData.phone = temp.value.phone;
      this.dialogData.role = temp.value.role;
      this.serviceAcc.addData(this.dialogData);
      this._dRef.close();
  }

}

