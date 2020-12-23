import { createAction, props } from '@ngrx/store';
import { Priority } from 'src/app/models/priority';

export const changeNotificationPriority = createAction(
  '[Settings] Change Notification Priority',
  props<{ notificationPriority: Priority }>()
);


