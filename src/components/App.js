import React from 'react';
import  News from 'components/News.js';
// import  Comments from 'components/Comments.js';
// import Article from 'components/Article.js';
import Add from 'components/Add.js';
import 'components/App.css';
import ee from 'utils/EventEmitter.js';

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

  state = {
    news : myNews
  }
  componentDidMount() {
    const self = this;

    ee.addListener('News.add', (item) => {
      const nextNews = item.concat(self.state.news);

      self.setState({ news: nextNews });
    });
  }

  componentWillUnmount() {
    ee.removeListener('News.add');
  }


  render() {
    console.log('render');
    return (
      <div className = 'app'>
        <h3> Новости </h3>
        <Add/>
        <News news={this.state.news}/>
      </div>
    );
  }
}

export default Component;
