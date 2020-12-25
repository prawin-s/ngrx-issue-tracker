import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Priority } from '../models/priority';
import { SettingsRootState } from './store';
import * as NotificationActions from './store/notification/notification.actions';
import * as fromNotification from './store/notification/notification.selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  notificationPriority$: Observable<Priority>;

  constructor(private store: Store<SettingsRootState>) {
    this.notificationPriority$ = this.store.select(fromNotification.selectPriority);
  }

  ngOnInit(): void {
  }

  changeNotificationPriority(notificationPriority: string): void {
    const priority: Priority = notificationPriority as Priority;

    this.store.dispatch(
      NotificationActions.changePriority({ priority })
    );

  }
}
