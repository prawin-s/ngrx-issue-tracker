import { createAction, props } from '@ngrx/store';
import { Priority } from 'src/app/models/priority';

export const changePriority = createAction(
  '[Settings] Change Priority',
  props<{ priority: Priority }>()
);


