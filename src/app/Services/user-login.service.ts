import { loginFormat } from './loginFormat';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  logins: loginFormat[] = [
    {
      userID: '123',
      password: 'hello'
    },
    {
      userID: '234',
      password: 'hello'
    },
    {
      userID: '345',
      password: 'hello'
    },
    {
      userID: '456',
      password: 'hello'
    }
  ];
  constructor() { }
  sendLoginData(){
    return [...this.logins];
  }
}
