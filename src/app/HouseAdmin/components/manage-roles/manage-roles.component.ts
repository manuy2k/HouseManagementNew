import { DeleteMateDialogComponent } from './../delete-mate-dialog/delete-mate-dialog.component';
import { EditMateDialogComponent } from './../edit-mate-dialog/edit-mate-dialog.component';
import { AddMateDialogComponent } from './../add-mate-dialog/add-mate-dialog.component';
import { MatDialog } from '@angular/material';
import { Dataformat } from './../../dataformat';
import { UserDataListService } from './../../../Services/user-data-list.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.css']
})
export class ManageRolesComponent implements OnInit {

  public _newData: Dataformat[];
  constructor(public dataSer: UserDataListService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this._newData = this.dataSer.getData();
    this.dataSer.getLiveData().subscribe((temp: Dataformat[])=> {
      this._newData = temp;
    });
  }

  editMate(temp:any,ind:number){
    const dialogRef=this.dialog.open(EditMateDialogComponent,
      {width:'350px',
      data:{temp,ind}
    });
  }
  deleteMate(ind:number){
    const dialogRef=this.dialog.open(DeleteMateDialogComponent, {width:'350px', data: ind})
  }

  newMateDialog(){
    const dialogData = this.dialog.open(AddMateDialogComponent,{
      height: '500px',
      width: '350px'
    });
  }

}
