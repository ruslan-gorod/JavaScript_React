import './App.css';
import React from 'react';
import HWFunction from './HWFunction.js'
import HWClassComponent from './HWClassComponent';
import HWClassPureComponent from './HWClassPureComponent';
import Counter from './Counter';

const MyFunctionComponent = ({ text = 'default text' }) => {
  return <div>-{text}-</div>
}

class MyClassComponent extends React.Component {
  render() {
    return <div>{this.props.text || 'default'}</div>
  }
}

let message = function Message() {
  return React.createElement(
    'h1',
    { className: "hello" },
    'Hello world from function createElement'
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>{message()}</div>
          <HWFunction />
          <HWClassComponent />
          <MyClassComponent text="Hello React from MyClassComponent" />
          <MyClassComponent />
          <MyFunctionComponent text='Hello React from MyFunctionComponent' />
          <HWClassPureComponent />
          <MyFunctionComponent />
          <div>
            <HWClassPureComponent />
          </div>
          <Counter />
        </div>
      </header>
    </div>
  );
}

export default App;
