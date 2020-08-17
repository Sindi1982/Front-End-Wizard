import ICategory from "./ICategory";

export default interface ICategoryReducer {
    loading: boolean;
    rendered: boolean;
    error: null | string;
    data: ICategory[];
}
