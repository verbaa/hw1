import React from "react";
import "./App.css";


import {newsData} from "./data";

export const News = () => (
    <div className="container">
        <div className="row">
            {newsData.map(({
                               link,
                               photo,
                               title,
                               categories,
                               author,
                               isSpecial,
                               dateCreated,
                               id,
                               content
                           }) => (
                <div className="col-4" key={id}>
                    <div className={`card + ${isSpecial ? ' card-special' : ''}`}>
                        {link ? <a href={link}>{title}</a> : title}
                        {photo && <img className="img-fluid" src={photo} alt="photo"/>}
                        <div dangerouslySetInnerHTML={{__html: content}}></div>
                        <div>Date: {dateCreated}</div>
                        <div>{author}</div>
                        {categories && <div className="category">{categories.map(({name, id}) => <span key={id}>{name} </span>)}</div>}
                    </div>
                </div>
            ))}
        </div>
    </div>
);