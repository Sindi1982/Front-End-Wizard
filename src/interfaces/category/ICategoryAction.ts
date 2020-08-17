import ICategory from "./ICategory";

export default interface ICategoryAction {
    type: string;
    payload: ICategory[] | string;
}
