import ILinkFetch from "./ILinkFetch";

export default interface ILinkAction {
    type: string;
    payload: string | ILinkFetch;
}
