import { combineReducers } from "redux";
import categoryReducer from "./categories";
import { Reducer } from "react";
import { IApplictionState } from "../../interfaces";

const rootReducer = combineReducers<IApplictionState>({
    categories: categoryReducer,
});

export default rootReducer;
