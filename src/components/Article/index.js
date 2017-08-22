import React from 'react';
import PropsType from 'prop-types';
import './index.css';

function Article(props) {
    const { author, title, description, url, urlToImage, publishedAt } = props;

    const info = (
        <div className="article__info">
            <h2 className="article__title">{title}</h2>
            <h2 className="article__title">{title}</h2>
            <b className="article__author">{author}</b>
            <p className="article__description">{description}</p>
            <p className="article___time">{publishedAt}</p>
        </div>
    );

    const image = (
        <span className="article__image-wrap">
            <img src={urlToImage} alt={title} className="article__image"/>
        </span>
    );

    if (url) {
        return (
            <a href={url} className="article article_type_link" target="_blank">
                {image}
                {info}
            </a>
        )
    }

    return (
        <div className="article">
            {image}
            {info}
        </div>
    );
}

Article.propTypes = {
    title: PropsType.string.isRequired,
    author: PropsType.string,
    description: PropsType.string,
    url: PropsType.string,
    urlToImage: PropsType.string,
    publishedAt: PropsType.string
};

export default Article;
