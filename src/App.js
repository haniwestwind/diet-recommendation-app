import logo from './logo.svg';
// import './App.css';


import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './components/About/About';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PreferenceForm from './components/Preferences/PreferenceForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
       </header>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/preferences">Preferences</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about" component={About} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/preferences" component={PreferenceForm} />
          {/* Add more routes as needed */}
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Register from './components/Register';
// import './App.css';

// function App() {
//   return (
//     <div className="app-container">
//       <Router>
//         <Switch>
//           <Route path="/register" component={Register} />
//           {/* Add more routes as needed */}
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
