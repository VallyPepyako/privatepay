import React, { Component } from 'react';
import { Main } from './pages/main';
import { Blog } from './pages/blog'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (

      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
        </ul>

        <Route exact path="/" component={Main} />
        <Route path="/blog" component={Blog} />
      </div>
    </Router>
    );
  }
}

export default App;
