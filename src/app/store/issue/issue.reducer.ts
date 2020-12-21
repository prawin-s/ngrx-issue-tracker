import { Action, createReducer, on } from '@ngrx/store';
import { initialState, IssueState } from './issue.state';
import * as IssueActions from './issue.actions';
import { loggingMetaReducer } from '../meta-reducers';
import produce from 'immer';


export const reducer = createReducer(
    initialState,
    // on(IssueActions.submit, (state, { issue }) => (
    //     {
    //         ...state,
    //         entities: {
    //             ...state.entities,
    //             [issue.id]: {
    //                 ...issue,
    //                 resolved: false
    //             }
    //         }
    //     }

    // ))
    on(IssueActions.submit, (state, { issue }) =>
        produce(state, (draft) => {
            draft.entities[issue.id] = {
                ...issue,
                resolved: false,
            };
        })
    )
);

//export const issueReducer = loggingMetaReducer(reducer);

export const issueReducer = (state: IssueState, action: Action): IssueState => {
    try {
        return reducer(state, action);
    } catch (error) {
        console.error(error);
        return state;
    }
};