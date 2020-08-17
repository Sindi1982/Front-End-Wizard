import ICategoryReducer from "./category/ICategory";
import ILinkGroup from "./link/ILinkGroup";

export default interface IApplicationState {
    categories: ICategoryReducer;
    links: ILinkGroup[];
}
