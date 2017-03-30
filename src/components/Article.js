import React from 'react';

class Article extends React.Component {
  getInitialState() {
    return {
      visible: false
    };
  }

  render() {
    const author = this.props.data.author;

    const text = this.props.data.text;

    const bigText = this.props.data.bigText;

    const visible = this.state.visible;

    return (
      <div className='article'>
        <p className='news__author'>{author}:</p>
        <p className='news__text'>{text}</p>
        <a href = '#' className = 'news__readmore '> Подробнее </a>
        <p className='news__bigText ' >{bigText}</p>
      </div>
    );
  }
}
export default Article;
