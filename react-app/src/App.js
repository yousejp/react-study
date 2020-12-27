// import React, { Component } from 'react';
import React from 'react';

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

const App = () => {
  const profiles = [
    { name: 'pekora', age: 111 },
    { name: 'marin', age: 17 },
    { name: 'rushia' },
  ];
  return (
    <React.Fragment>
      <div>
        {profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />;
        })}
      </div>
    </React.Fragment>
  );
};

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

export default App;
