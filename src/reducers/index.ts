import { combineReducers } from "redux";
import categoryReducer from "./categories";
import linkReducer from "./links";

const rootReducer = combineReducers({
    categories: categoryReducer,
    links: linkReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
