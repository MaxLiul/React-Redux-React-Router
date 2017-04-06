import React from 'react';
import Article from 'components/Article.js';

export class News extends React.Component {

  static propTypes = {
    news: React.PropTypes.array
  };

  render() {
    const news = this.props.news;

    let newsTemplate = {};

    if (news.length > 0) {
      newsTemplate = news.map((item, index) => {
        return (
          <div key={index}>
            <Article article = {item} />
          </div>
        );
      }
  );
    } else {
      newsTemplate = <p> К сожалению новостей нет</p>;
    }
    return (
      <div className='news'>
        {newsTemplate}
        <strong className={news.length > 0 ? '' : 'none'}>Всего новостей: {news.length}</strong>
      </div>
    );
  }
}
