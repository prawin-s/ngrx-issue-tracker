import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Issue } from 'src/app/models/issue';
import { RootState } from 'src/app/store';
import * as fromIssue from '../../store/issue/issue.selectors';
import * as IssueActions from '../../store/issue/issue.actions';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {

  issues$: Observable<Issue[]>;

  constructor(private store: Store<RootState>) {
    this.issues$ = this.store.select(fromIssue.selectFiltered);
  }

  ngOnInit(): void {
  }

  search(text: string): void {
    this.store.dispatch(IssueActions.search({ text }));
  }

  resolve(issue: Issue): void {
    this.store.dispatch(IssueActions.resolve({ issueId: issue.id }));
  }

  trackByIssues(index: number, issue: Issue): string {
    return issue.id;
  }

}
