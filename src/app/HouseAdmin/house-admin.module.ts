import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetPlanComponent } from './components/budget-plan/budget-plan.component';
import { DailyExpensesComponent } from './components/daily-expenses/daily-expenses.component';
import { ManageRolesComponent } from './components/manage-roles/manage-roles.component';
import { RaiseCapitalComponent } from './components/raise-capital/raise-capital.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

const routes: Routes = [
  { path: 'homePage', component: AdminHomeComponent,
    children:[
      { path: 'budgetPlan', component: BudgetPlanComponent },
      { path: 'dailyExpenses', component: DailyExpensesComponent },
      { path: 'raiseCapital', component: RaiseCapitalComponent },
      { path: 'upcoming', component: UpcomingEventsComponent },
      { path: 'manageRoles', component: ManageRolesComponent },
      { path: '', component: DashBoardComponent }
    ]  
  }
]
@NgModule({
  declarations: [
    AdminHomeComponent,
    BudgetPlanComponent,
    DailyExpensesComponent,
    ManageRolesComponent,
    RaiseCapitalComponent,
    UpcomingEventsComponent,
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HouseAdminModule { }
