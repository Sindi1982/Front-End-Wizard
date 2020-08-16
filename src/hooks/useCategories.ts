import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IApplictionState } from "../interfaces";
import { CategoryActions } from "../enums";
import API from "../services/api";

const useCategories = () => {
    const dispatch = useDispatch();
    const selectCategories = (state: IApplictionState) => state.categories;
    const categories = useSelector(selectCategories);

    useEffect(() => {
        const fetchCategories = async () => {
            dispatch({ type: CategoryActions.CATEGORY_FETCH });
            try {
                const res = await API.get("/category");
                dispatch({ type: CategoryActions.CATEGORY_SUCCESS, payload: res.data.data });
            } catch {
                dispatch({ type: CategoryActions.CATEGORY_ERROR, payload: "Error loading categories" });
            }
        };

        fetchCategories();
    }, []);

    return [categories];
};

export default useCategories;
