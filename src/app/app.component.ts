import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset } from './store/meta-reducers';
import * as fromIssue from './store/issue/issue.selectors';
import { RootState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stats$: Observable<fromIssue.IssueStats>;

  constructor(private store: Store<RootState>) {
    this.stats$ = this.store.select(fromIssue.selectStats);
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
