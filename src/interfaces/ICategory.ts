export interface ICategory {
    _id: string;
    route: string;
    name: string;
    description: string;
}

export interface ICategoryReducer {
    loading: boolean;
    rendered: boolean;
    error: null | string;
    data: ICategory[];
}

export interface ICategoryAction {
    type: string;
    payload: ICategory[] | string;
}
