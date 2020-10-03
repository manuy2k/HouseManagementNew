import { Dataformat } from './../HouseAdmin/dataformat';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataListService {

  usersList: Dataformat[] = [
    {
      id: 123,
      firstName: "Manu",
      lastName: "Chandra",
      email: "mgmanuchandra8@gmail.com",
      phone: 9666000942,
      role: "Admin"
    },
    {
      id: 234,
      firstName: "Vijay",
      lastName: "Raju",
      email: "gvijay222@gmail.com",
      phone: 9492411981,
      role: "Admin"
    },
    {
      id: 345,
      firstName: "Vijay",
      lastName: "Kanth",
      email: "vijaykanthrv@gmail.com",
      phone: 9494791882,
      role: "Mate"
    },
    {
      id: 456,
      firstName: "Harish",
      lastName: "Desetti",
      email: "harishdesetti27@gmail.com",
      phone: 9491707527,
      role: "Mate"
    },
  ];
  private msg = new Subject<Dataformat[]>();
  constructor() { }


  getData(){
    return [...this.usersList];
  }

  addData(value: Dataformat){
    const temp = { id: value.id,
                    firstName: value.firstName,
                    lastName: value.lastName,
                    email: value.email,
                    phone: value.phone,
                    role: value.role
                  };
    this.usersList.push(temp);
    this.msg.next([...this.usersList]);
  }

  getLiveData(){
    return this.msg.asObservable();
  }

  updateData(updv: Dataformat, ind: number){
    const temp = {
      id:this.usersList[ind].id,
      firstName: updv.firstName,
      lastName: updv.lastName,
      email: updv.email,
      phone: updv.phone,
      role: updv.role
    };
    this.usersList[ind]=temp;
    this.msg.next([...this.usersList]);
  }

  deleteData(ind){
    this.usersList.splice(ind,1);
    this.msg.next([...this.usersList]);
  }

}
