import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Issue } from 'src/app/models/issue';
import { RootState } from 'src/app/store';
import * as fromIssue from '../../store/issue/issue.selectors';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueDetailComponent implements OnInit {
  issue$: Observable<Issue>;

  constructor(private route: ActivatedRoute, private store: Store<RootState>) {
    this.issue$ = this.route.params.pipe(
      switchMap((params) => this.store.select(fromIssue.selectOne, params.id))
    );
  }

  ngOnInit(): void {
  }

}
