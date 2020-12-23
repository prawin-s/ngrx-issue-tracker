import { Priority } from "src/app/models/priority";
import { RootState } from "src/app/store";

export interface SettingsState {
    notificationPriority: Priority;

}

export const initialState: SettingsState = {
    notificationPriority: 'low',

};

export const settingsFeatureKey = 'settings';

export interface SettingsRootState extends RootState {
    [settingsFeatureKey]: SettingsState;
}
