import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Priority } from '../models/priority';
import * as SettingsActions from './store/settings.actions';
import * as fromSettings from './store/settings.selectors';
import { SettingsRootState } from './store/settings.state';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  notificationPriority$: Observable<Priority>;

  constructor(private store: Store<SettingsRootState>) {
    this.notificationPriority$ = this.store.select(fromSettings.selectNotificationPriority);
  }

  ngOnInit(): void {
  }

  changeNotificationPriority(priority: string): void {
    const notificationPriority: Priority = priority as Priority;

    this.store.dispatch(
      SettingsActions.changeNotificationPriority({ notificationPriority })
    );

  }
}
