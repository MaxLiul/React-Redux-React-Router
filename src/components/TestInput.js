import React from 'react';
import ReactDOM from 'react-dom';
class TestInput extends React.Component {


  handleBtnClickHandler() {
    console.log(ReactDOM.findDOMNode(this.myTestInput));
  }

  render() {
    return (
      <div>
        <input
          className = 'test-input'
          defaultValue = ''
          placeholder = 'Введите значение'
          ref = {(element) => this.myTestInput = element}
        />
        <button onClick = {::this.handleBtnClickHandler}> Показать</button>
      </div>

    );
  }
}
export default TestInput;
