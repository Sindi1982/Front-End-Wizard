import ILink from "./ILink";

export default interface ILinkGroup {
    name: string;
    loading: boolean;
    rendered: boolean;
    error: null | string;
    links: ILink[];
}
