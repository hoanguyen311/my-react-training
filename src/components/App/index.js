import React, { Component } from 'react';
import Article from '../Article';
import FormSelect from '../FormSelect';
import logo from './logo.svg';
import styles from './index.css';

const articles = [
    {
        "author": "Jon Russell",
        "title": "In India, an Uber for farm machinery aims to make a difference in rural areas",
        "description": "Uber has inspired countless businesses to adopt its asset-light and on-demand approach to their industries. The examples are countless. Food delivery, dry..",
        "url": "https://techcrunch.com/2017/08/15/em3/",
        "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/08/em3.jpg?w=764&h=400&crop=1",
        "publishedAt": "2017-08-15T09:58:59Z"
    },
    {
        "author": "Romain Dillet",
        "title": "Google needs to pay Apple a small fortune to remain the default search engine on iOS",
        "description": "Apple and Google could be the biggest frenemies in tech. While they both compete like there’s no tomorrow, they also partner on some very specific deals...",
        "url": "https://techcrunch.com/2017/08/20/google-needs-to-pay-apple-a-small-fortune-to-remain-the-default-search-engine-on-ios/",
        "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2015/08/safari-ios.jpeg?w=764&h=400&crop=1",
        "publishedAt": "2017-08-20T17:52:34Z"
    },
    {
        "author": "Romain Dillet",
        "title": "The Daily Stormer was back online for a quick second",
        "description": "Neo-Nazi site The Daily Stormer is running out of options to stay online. There has been a public outcry against tech companies helping websites, such as The..",
        "url": "https://techcrunch.com/2017/08/20/the-daily-stormer-was-back-online-for-a-quick-second/",
        "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/02/gettyimages-493420504.jpg?w=764&h=400&crop=1",
        "publishedAt": "2017-08-20T11:38:58Z"
    },
        {
        "author": "Katie Roof",
        "title": "Former GE CEO Jeff Immelt close to becoming Uber’s CEO",
        "description": "The long and dramatic process for naming a new Uber CEO may be coming closer to an end. First reported by Kara Swisher, our sources are also telling us that..",
        "url": "https://techcrunch.com/2017/08/19/former-ge-ceo-jeff-immelt-close-to-becoming-ubers-ceo/",
        "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/07/gettyimages-595927402.jpg?w=764&h=400&crop=1",
        "publishedAt": "2017-08-19T21:13:30Z"
        },
    {
        "author": "Lucas Matney",
        "title": "Leaked image suggests a new Nest thermostat is on the way",
        "description": "Alphabet-owned Nest has taken some pretty safe choices in the IoT space, building products that rely on a their Internet connectedness to function. Their most..",
        "url": "https://techcrunch.com/2017/08/19/leaked-image-shows-off-new-version-of-nest-thermostat/",
        "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2012/05/nest-thermostat-auto-away.png?w=764&h=400&crop=1",
        "publishedAt": "2017-08-19T18:34:01Z"
    }
];

const sourceTypesOptions = [
    { value: "business", text: "Business" },
    { value: "entertainment", text: "Entertainment" },
    { value: "gaming", text: "Gaming" },
    { value: "general", text: "General" },
    { value: "music", text: "Music" },
    { value: "politics", text: "Politics" },
    { value: "science-and-nature", text: "Science And Nature" },
    { value: "sport", text: "Sport" },
    { value: "technology", text: "Technology" },
];

const sources = [
    { value: 0, text: "Select source" }
];

class App extends Component {
    render() {
        return (
          <div className={styles['app']}>
            <div className={styles['app__header']}>
              <img src={logo} className={styles['app__logo']} alt="logo" />
              <h2>Hot News</h2>
            </div>
            <div className={styles['app__form']}>
                <div className={styles['app__source-select']}>
                    <FormSelect options={sourceTypesOptions} label="Source type: "/>
                </div>
                <div className={styles['app__source-select']}>
                    <FormSelect options={sources} label="Sources: " disabled={true}/>
                </div>
            </div>
            <div className={styles['app__articles']}>
                {articles.map((item, index) => (
                    <div className={styles['app__article']} key={index}>
                        <Article {...item} />
                    </div>
                ))}
            </div>
          </div>
        );
    }
}

export default App;
