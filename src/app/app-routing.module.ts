import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesComponent } from './components/issues/issues.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'issues' },
  { path: 'issues', component: IssuesComponent },
  { path: 'issues/:id', component: IssueDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
