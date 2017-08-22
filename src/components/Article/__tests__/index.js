import React from 'react';
import Article from '../.';
import renderer from 'react-test-renderer';

const mock = {
    "author": "Jon Russell",
    "title": "In India, an Uber for farm machinery aims to make a difference in rural areas",
    "description": "Uber has inspired countless businesses to adopt its asset-light and on-demand approach to their industries. The examples are countless. Food delivery, dry..",
    "url": "https://techcrunch.com/2017/08/15/em3/",
    "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/08/em3.jpg?w=764&h=400&crop=1",
    "publishedAt": "2017-08-15T09:58:59Z"
};

const mockWithoutUrl = {
    "author": "Jon Russell",
    "title": "In India, an Uber for farm machinery aims to make a difference in rural areas",
    "description": "Uber has inspired countless businesses to adopt its asset-light and on-demand approach to their industries. The examples are countless. Food delivery, dry..",
    "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/08/em3.jpg?w=764&h=400&crop=1",
    "publishedAt": "2017-08-15T09:58:59Z"
};

describe('test aritcle by snapshot', () => {
    it('render correctly with A tag', () => {
        const article = renderer.create(
            <Article {...mock} />
        ).toJSON();

        expect(article).toMatchSnapshot();
    });

    it('render correctly without A tag', () => {
        const article = renderer.create(
            <Article {...mockWithoutUrl} />
        ).toJSON();

        expect(article).toMatchSnapshot();
    });
});
