import { loginFormat } from './../Services/loginFormat';
import { UserLoginService } from './../Services/user-login.service';
import { CLFormComponent } from './components/clform/clform.component';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  nowData: loginFormat[] = [];
  login_id: string = "";
  password_id: string = "";
  constructor(public router: Router,
    public loginServ: UserLoginService) { }

  ngOnInit() {
  }

  doProcessReq(){
    for(let i of this.loginServ.sendLoginData()){
      if(i.userID === this.login_id && i.password === this.password_id){
        this.router.navigateByUrl('/adminMode/homePage');
      }
    }


  }
}
