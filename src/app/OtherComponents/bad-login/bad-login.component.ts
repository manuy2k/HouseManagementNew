import { Router } from '@angular/router';
import { UserLoginService } from './../../Services/user-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bad-login',
  templateUrl: './bad-login.component.html',
  styleUrls: ['./bad-login.component.css']
})
export class BadLoginComponent implements OnInit {

  pwdV: boolean = false;
  pwdT: boolean = false;
  wrongAgain: boolean = false;
  counter: number = 0;
  loginID: string = "";
  password: string = "";

  constructor(public usl: UserLoginService,
    public router: Router) {

   }

  ngOnInit() {
  }

  iconToggler(){
    this.pwdT = !this.pwdT;
    this.pwdV = !this.pwdV;

  }

  doProcessReq(){
    for(let i of this.usl.sendLoginData()){
      if(this.loginID === i.userID && this.password === i.password){
        this.router.navigateByUrl('/adminMode/homePage');
        this.counter = 1;
        this.wrongAgain = false;
      }
    }
    if(this.counter == 0){
      this.wrongAgain = true;
    }


  }

}
