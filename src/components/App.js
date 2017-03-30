import React from 'react';
import  News from 'components/News.js';
import  Comments from 'components/Comments.js';
import Article from 'components/Article.js';
import 'components/App.css';

const myNews = [
  {
    author: 'William',
    text: 'To be or...',
    bigText: 'not to be'
  },
  {
    author: 'Taras',
    text: 'Реве та стогне...',
    bigText: 'Дніпр широкий'
  },
  {
    author: 'Mikhail',
    text: 'Скажи-ка дядя,... ',
    bigText: 'ведь не даром'
  }
];

class Component extends React.Component {
  render() {
    return (
      <div>
        <h3> Новости </h3>
        <News data={myNews}/>
        <Comments/>
      </div>
    );
  }
}

export default Component;
