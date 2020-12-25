import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { IssueService } from 'src/app/services/issue.service';
import { NotificationService } from 'src/app/services/notification.service';
import * as IssueActions from './issue.actions';


@Injectable()
export class IssueEffects implements OnInitEffects {

  constructor(private action$: Actions,
    private issueService: IssueService,
    private notifications: NotificationService) { }

  ngrxOnInitEffects(): Action {
    return IssueActions.load();
  }

  submit$ = createEffect(() =>
    this.action$.pipe(
      ofType(IssueActions.submit),
      mergeMap((action) =>
        this.issueService.save(action.issue).pipe(
          map((issue) => IssueActions.submitSuccess({ issue })),
          catchError(() => of(IssueActions.submitFailure()))
        )
      )
    )
  );

  resolve$ = createEffect(() =>
    this.action$.pipe(
      ofType(IssueActions.resolve),
      mergeMap(({ issueId }) =>
        this.issueService.resolve(issueId).pipe(
          map(() => IssueActions.resolveSuccess()),
          catchError(() => of(IssueActions.resolveFailure({ issueId })))
        )
      )
    )
  );

  load$ = createEffect(() =>
    this.action$.pipe(
      ofType(IssueActions.load),
      switchMap(() => this.issueService.getAll()),
      map((issues) => IssueActions.loadSuccess({ issues }))
    )
  );

  notification$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(IssueActions.submitSuccess),
        tap(({ issue }) => {
          this.notifications.info(`Issue submitted: ${issue.title}`);
        })
      ),
    { dispatch: false }
  );

}
