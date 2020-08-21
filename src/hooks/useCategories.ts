import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CategoryActions } from "../enums";
import API from "../services/api";
import { RootState } from "../reducers";

const useCategories = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state: RootState) => state.categories);

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
