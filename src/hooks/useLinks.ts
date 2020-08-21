import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IApplicationState } from "../interfaces";
import { LinkActions } from "../enums";
import API from "../services/api";

const useLinks = () => {
    const dispatch = useDispatch();
    const selectLinks = (state: IApplicationState) => state.links;
    const links = useSelector(selectLinks);

    const fetchLinks = async (name: string) => {
        dispatch({ type: LinkActions.LINK_FETCH, payload: name });
        try {
            const res = await API.get(`/link/${name}`);
            dispatch({ type: LinkActions.LINK_SUCCESS, payload: { name, links: res.data.data } });
        } catch {
            dispatch({ type: LinkActions.LINK_ERROR, payload: name });
        }
    };

    return [links, fetchLinks] as const;
};

export default useLinks;
