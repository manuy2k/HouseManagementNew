import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  db: boolean = true;
  bp: boolean = false;
  de: boolean = false;
  rc: boolean = false;
  ue: boolean = false;
  mr: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadComponents(attrib){   
      
  }

}
