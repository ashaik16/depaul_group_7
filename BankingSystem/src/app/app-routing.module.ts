import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';

const routes: Routes = [
  {path: 'loan', component: LoanApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
