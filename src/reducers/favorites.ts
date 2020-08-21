import { FavoritesActions } from "../enums";

const INITIAL_STATE: string[] = [];

export interface IFavoritesAction {
    type: string;
    payload: string;
}

const favoritesReducer = (state = INITIAL_STATE, action: IFavoritesAction): string[] => {
    switch (action.type) {
        case FavoritesActions.FAVORITES_ADD:
            localStorage.setItem("favorites", JSON.stringify([...state, action.payload]));
            return [...state, action.payload];
        case FavoritesActions.FAVORITES_REMOVE:
            const newState = state.filter((e) => e !== action.payload);
            localStorage.setItem("favorites", JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
};

export default favoritesReducer;
