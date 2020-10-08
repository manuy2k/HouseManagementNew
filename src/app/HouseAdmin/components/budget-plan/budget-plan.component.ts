import { breakupPlanFormat } from './../../breakupPlanFormat';
import { BreakupPlanService } from './../../../Services/breakup-plan.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-budget-plan',
  templateUrl: './budget-plan.component.html',
  styleUrls: ['./budget-plan.component.css']
})
export class BudgetPlanComponent implements OnInit {

  toggle: boolean = true;
  newPlan: breakupPlanFormat;
  constructor(private _bps: BreakupPlanService) { }


  ngOnInit() {
    this.newPlan =  this._bps.sendPlan();
    console.log(this.newPlan);
  }

  toggler(key){
    console.log(key);
    if(key=="rent")
      this.toggle = !this.toggle;
    if(key=="elec")
    this.toggle = !this.toggle;
  }

  goForIt(){
    this._bps.updatePlan(this.newPlan);
    alert("Updated Successfully");
  }
}
