import { Priority } from "src/app/models/priority";

export interface NotificationState {
    priority: Priority;
}

export const initialState: NotificationState = {
    priority: 'low',
};

