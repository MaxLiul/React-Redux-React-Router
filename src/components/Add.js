import React from 'react';
import ReactDOM from 'react-dom';
class Add extends React.Component {

  state = {
    agreeNotChecked: true,
    authorIsEmpty: true,
    textIsEmpty: true
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.authorName).focus();
  }

  handleonBtnClickHandler(e) {
    e.preventDefault();
    console.log(this.authorName.value);
    console.log(this.textName.value);
  }

  onCheckRuleClick(e) {
    ReactDOM.findDOMNode(this.buttonName).disabled = !e.target.checked;
    return  console.log(`Max ${e.target.checked}`);
  }

  onAuthorChange(e) {
    if (e.target.value.length > 0) {
      this.setState({ authorIsEmpty: false });
    } else {
      this.setState({ authorIsEmpty: true });
    }
  }

  onTextChange(e) {
    if (e.target.value.trim().length > 0) {
      this.setState({ textIsEmpty: false });
    } else {
      this.setState({ textIsEmpty: true });
    }
  }

  render() {
  //  const agreeNotChecked = this.state.agreeNotChecked;

  //  const  authorIsEmpty = this.state.authorIsEmpty;
  //  const   textIsEmpty = this.state.textIsEmpty;

    return (
      <form className = 'add cf'>
        <input
          type = 'text'
          className = 'add__author'
          defaultValue = ''
          placeholder = 'Введите name'
          ref = {(element) => this.authorName = element}
          onChange = {::this.onAuthorChange}
        />

        <textarea

          className ='add__text'
          defaultValue = ''
          placeholder = 'Текст новости'
          ref = {(element) => this.textName = element}
          onChange = {::this.onTextChange}
        />

        <label
          className='add__checkrule'
        >
          <input
            type='checkbox'
            defaultChecked={false}
            ref = {(element) => this.checkName = element}
            onChange = {::this.onCheckRuleClick}
          />Я согласен с правилами
        </label>

        <button
          className='add__btn'
        //  disabled // ={textIsEmpty}
          onClick={::this.handleonBtnClickHandler}
          ref = {(element) => this.buttonName = element}
        > Показать alert
         </button>
      </form>
    );
  }
}

export default Add;
