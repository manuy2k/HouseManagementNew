import { CLFormComponent } from './components/clform/clform.component';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(router: Router) { }

  ngOnInit() {
  }
  doProcessReq(){
    alert("Logging in....")
  }
}
