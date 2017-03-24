import React /* , {PropTypes, Component }*/ from 'react';
import { News } from 'components/News.jsx';

function renderFunction1() {
  return (
    <div>
    Hello++12 <News/>
    </div>);
}
// const json = { render: renderFunction1 };
const object1 = {};
object1.render = renderFunction1;
const str = 'render';
object1[str] = renderFunction1;
const App = React.createClass(object1);
export default App;
