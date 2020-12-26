import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() issues: Issue[] = [];
  @Output() search = new EventEmitter<string>();
  @Output() resolve = new EventEmitter<Issue>();

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(text: string): void {
    this.search.emit(text);
  }

  onResolve(issue: Issue): void {
    this.resolve.emit(issue);
  }
  
  trackByIssues(index: number, issue: Issue): string {
    return issue.id;
  }

}
