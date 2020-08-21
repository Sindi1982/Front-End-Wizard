import { combineReducers } from "redux";
import categoryReducer from "./categories";
import favoritesReducer from "./favorites";
import linkReducer from "./links";

const rootReducer = combineReducers({
    categories: categoryReducer,
    favorites: favoritesReducer,
    links: linkReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
