import React, { Component } from 'react';
import { Main } from './pages/Main';
import { Groups } from './pages/Groups'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import Login from './containers/Login';
import Registration from './containers/Registration';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      isUserLogIn: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.login = this.login.bind(this);
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  login() {
    this.setState({
      isUserLogIn: true
    })
  }
  render() {
    const {isUserLogIn} = this.state
    
    return (
      isUserLogIn ? <Sidebar
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
    </Sidebar> :
      <div className="welcome-screen">
        <Login login={this.login}/>
        <Registration />
      </div>
    );
  }
}

export default App;
