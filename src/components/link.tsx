import React from "react";
import { ILink } from "../interfaces";
import bookmarkIcon from "../assets/images/bookmark.svg";
import bookmarkFilledIcon from "../assets/images/bookmarkFilled.svg";
import moment from "moment";

interface ILinkComp {
    link: ILink;
    bookmarked: boolean;
}

const Link = ({ link, bookmarked = false }: ILinkComp) => (
    <a className="link" href={link.url} target="_blank" rel="noopener noreferrer">
        <div className="link_icon">
            <img
                className="link_icon-img"
                src={bookmarked ? bookmarkFilledIcon : bookmarkIcon}
                alt="link icon"
                onClick={(e) => {
                    e.preventDefault();
                    console.log(`Bookmark #${link._id}`);
                }}
            />
        </div>
        <div>
            <p className="link_title">{link.title}</p>
            <p className="link_description">{link.description}</p>
            <p className="link_date">{moment(link.date).format("Do MMM YYYY")}</p>
        </div>
    </a>
);

export default Link;
