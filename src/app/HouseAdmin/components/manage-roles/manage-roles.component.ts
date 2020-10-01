
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
  constructor(public dataSer: UserDataListService) { }

  ngOnInit() {
    this._newData = this.dataSer.getData();
    this.dataSer.getLiveData().subscribe((temp: Dataformat[])=> {
      this._newData = temp;
      console.log("Printing from observable",temp);
    })
  }

  doSomething(){
    console.log("Hello Detective");
  }

}
