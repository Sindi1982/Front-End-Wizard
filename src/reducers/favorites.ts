import { FavoritesActions } from "../enums";

const INITIAL_STATE: string[] = [];

export interface IFavoritesAction {
    type: string;
    payload: string;
}

const favoritesReducer = (state = INITIAL_STATE, action: IFavoritesAction): string[] => {
    switch (action.type) {
        case FavoritesActions.FAVORITES_ADD:
            return [...state, action.payload];
        case FavoritesActions.FAVORITES_REMOVE:
            console.log(`Remove Favorite ${action.payload}`);
            return state;
        default:
            return state;
    }
};

export default favoritesReducer;
