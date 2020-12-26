import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Issue } from 'src/app/models/issue';
import { IssueFacade } from 'src/app/store/issue/issue.facade';
import { RootState } from '../../store';
import * as IssueActions from '../../store/issue/issue.actions';
import * as fromIssue from '../../store/issue/issue.selectors';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  issues$: Observable<Issue[]> | undefined;

  constructor(private facade: IssueFacade) { }

  ngOnInit(): void {
    this.issues$ = this.facade.issues$;
  }

  onSearch(text: string): void {
    this.facade.search(text);
  }

  onResolve(issue: Issue): void {
    this.facade.resolve(issue.id);
  }

  onSubmit(issue: Issue): void {
    this.facade.submit(issue);
  }

}
