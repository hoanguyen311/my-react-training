import React from 'react';
import { shallow } from 'enzyme';
import Article from '../.';

const mock = {
    "author": "Jon Russell",
    "title": "In India, an Uber for farm machinery aims to make a difference in rural areas",
    "description": "Uber has inspired countless businesses to adopt its asset-light and on-demand approach to their industries. The examples are countless. Food delivery, dry..",
    "url": "https://techcrunch.com/2017/08/15/em3/",
    "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/08/em3.jpg?w=764&h=400&crop=1",
    "publishedAt": "2017-08-15T09:58:59Z"
};

it('should have render title correctly', ()=> {
    const article = shallow(
        <Article {...mock} />
    );
    expect(article.find('.article__title')).toHaveLength(2);
    expect(article.find('.article__title').at(0).text()).toBe('In India, an Uber for farm machinery aims to make a difference in rural areas');
})
