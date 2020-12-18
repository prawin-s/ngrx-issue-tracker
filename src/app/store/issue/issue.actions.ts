import { createAction, props } from "@ngrx/store";
import { Issue } from "src/app/models/issue";
import { randomId } from "src/app/util";

// export const submit = createAction(
//     '[Issue] Submit',
//     props<{ issue: Issue }>()
// )

export const submit = createAction(
    '[Issue] Submit',
    (issue: Issue) => {
        return {
            issue: {
                ...issue,
                id: randomId(),
            },
        };
    }
);