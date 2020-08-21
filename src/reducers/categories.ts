import { CategoryActions } from "../enums";
import { ICategoryReducer, ICategoryAction, ICategory } from "../interfaces";

const INITIAL_STATE: ICategoryReducer = {
    loading: false,
    rendered: false,
    error: null,
    data: [],
};

const categoryReducer = (state = INITIAL_STATE, action: ICategoryAction): ICategoryReducer => {
    if (state.rendered) return state;
    switch (action.type) {
        case CategoryActions.CATEGORY_FETCH:
            return {
                ...state,
                loading: true,
            };
        case CategoryActions.CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                rendered: false,
                error: action.payload as string,
            };
        case CategoryActions.CATEGORY_SUCCESS:
            return {
                loading: false,
                rendered: true,
                data: action.payload as ICategory[],
                error: null,
            };
        default:
            return state;
    }
};

export default categoryReducer;
