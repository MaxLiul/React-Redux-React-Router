import React /* , {PropTypes, Component }*/ from 'react';
import { News } from 'components/News.js';

class Component extends React.Component {
  render() {
    return (
      <div>
        Hello++12 <News/>
      </div>
    );
  }
}

const App = new Component()

export default App;
