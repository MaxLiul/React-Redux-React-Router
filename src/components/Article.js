import React from 'react';

class Article extends React.Component {
  static propTypes = {
    article: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      bigText: React.PropTypes.string.isRequired
    })
  }

  state = {
    visible: false
  };

  handleReadmoreClick(e) {
    console.log(this.state.visible);
    e.preventDefault();
    this.setState({ visible: true });
  }

  render() {
    const author = this.props.article.author;

    const text = this.props.article.text;

    const bigText = this.props.article.bigText;

    const visible = this.state.visible;

    return (
      <div className='article'>
        <p className='news__author'>{author}:</p>
        <p className='news__text'>{text}</p>
        <a href = '#' onClick = {::this.handleReadmoreClick}  className={
          `news__readmore ${visible ? 'none' : '' }` // js
       }> Подробнее</a>
        <p className = {`news__big-text ${visible ? '' : 'none'}`}>{bigText}</p>
      </div>
    );
  }
}
export default Article;
