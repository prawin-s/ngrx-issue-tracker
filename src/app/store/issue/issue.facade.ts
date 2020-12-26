import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '..';
import { Issue } from '../../models/issue';
import * as IssueActions from './issue.actions';
import * as fromIssue from './issue.selectors';

@Injectable({ providedIn: 'root' })
export class IssueFacade {

    issues$ = this.store.pipe(fromIssue.selectAllLoaded());

    constructor(private store: Store<RootState>) { }

    submit(issue: Issue): void {
        this.store.dispatch(IssueActions.submit({ issue }));
    }

    resolve(issueId: string): void {
        this.store.dispatch(IssueActions.resolve({ issueId }));
    }

    search(text: string): void {
        this.store.dispatch(IssueActions.search({ text }));
    }
}
