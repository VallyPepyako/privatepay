import React, { Component } from 'react';
import { Main } from './pages/Main';
import { Groups } from './pages/Groups'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from "react-sidebar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        pullRight={true}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
          </ul>

          <Route exact path="/" component={Main} />
          <Route path="/Groups" component={Groups} />
      </Router>
    </Sidebar>
    );
  }
}

export default App;
