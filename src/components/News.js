import React from 'react';
import Article from 'components/Article.js'
class News extends React.Component {
  render() {
    const data = this.props.data;
    let newsTemplate = {};

    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        );
      }
  );
    } else {
      newsTemplate = <p> К сожалению новостей нет</p>;
    }
    return (
      <div className="news">
        {newsTemplate}
        <strong className={data.length > 0 ? '':'none'}>Всего новостей: {data.length}</strong>
      </div>
    );
  }
}

export default News;
