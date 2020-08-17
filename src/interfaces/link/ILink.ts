export default interface ILink {
    _id: string;
    category: string;
    title: string;
    description: string;
    url: string;
    type: string;
    date: Date;
    publishedDate?: Date;
    version?: number;
}
