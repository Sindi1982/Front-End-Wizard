import { LinkActions } from "../enums";
import { ILinkGroup, ILinkFetch, ILinkAction } from "../interfaces";

const INITIAL_STATE: ILinkGroup[] = [];

const linkReducer = (state = INITIAL_STATE, action: ILinkAction): ILinkGroup[] => {
    if (action.type === LinkActions.LINK_FETCH) {
        const linkGroup = state.find((linkGroup) => linkGroup.name === action.payload);
        if (linkGroup && linkGroup.rendered) return state;
    }
    switch (action.type) {
        case LinkActions.LINK_FETCH:
            return [
                ...state,
                {
                    name: action.payload as string,
                    loading: true,
                    rendered: false,
                    error: null,
                    links: [],
                },
            ];
        case LinkActions.LINK_ERROR:
            const errIndex = state.findIndex((linkGroup) => linkGroup.name === action.payload);
            const errState = [...state];
            errState[errIndex] = {
                name: action.payload as string,
                loading: false,
                rendered: false,
                error: `Error Loading links`,
                links: [],
            };
            return errState;
        case LinkActions.LINK_SUCCESS:
            const successIndex = state.findIndex((linkGroup) => linkGroup.name === (action.payload as ILinkFetch).name);
            const successState = [...state];
            successState[successIndex] = {
                name: (action.payload as ILinkFetch).name,
                loading: false,
                rendered: true,
                error: null,
                links: (action.payload as ILinkFetch).links,
            };
            return successState;
        default:
            return state;
    }
};

export default linkReducer;
