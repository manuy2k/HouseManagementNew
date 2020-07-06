import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clform',
  templateUrl: './clform.component.html',
  styleUrls: ['./clform.component.css']
})
export class CLFormComponent implements OnInit {

  toggler: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  doSomeAction(){
    this.toggler = !this.toggler;
  }

}
