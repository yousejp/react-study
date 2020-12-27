import React, { Component } from 'react';
// import React from 'react';
// import PropTypes from 'prop-types';

// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
// };

const App = () => <Counter></Counter>;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  // stateを変更するときは{ count: 0 }ではなくsetStateを使う
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleMinusButton}>-1</button>
        <button onClick={this.handlePlusButton}>+1</button>
      </React.Fragment>
    );
  }
}

// export { CounterApp };

const User = (props) => {
  return (
    <h2>
      HA↑HA↑HA↑HA↑ I am {props.name}! {props.age} years old
    </h2>
  );
};

User.defaultProps = {
  age: 78,
};

// const App2 = () => {
//   const profiles = [
//     { name: 'pekora', age: 111 },
//     { name: 'marin', age: 17 },
//     { name: 'rushia' },
//     // { name: 78 }, nameがnumber型だとエラーになる
//   ];
//   return (
//     <React.Fragment>
//       <div>
//         {profiles.map((profile, index) => {
//           return <User name={profile.name} age={profile.age} key={index} />;
//         })}
//       </div>
//     </React.Fragment>
//   );
// };

// class App extends Component {
//   render() {
//     const welcome = 'Welcome to Reactぺこだにぇなのです';
//     const text = (
//       <React.Fragment>
//         <h1 className="head">
//           {welcome}
//           <br />
//           yarn start でローカルサーバーが立ち上がる
//         </h1>
//         <p>Reactの制約で一つのタグしか返してはいけない</p>
//         <User name={'usada'} age={111} />
//         <User name={'marin'} age={17} />
//       </React.Fragment>
//     );
//     return text;
//   }
// }

// export { App };

export default App;
