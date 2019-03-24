import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "react-sidebar";
import Login from './containers/Login';
import Registration from './containers/Registration';
import Footer from './components/footer';
import Header from './components/header';
import Groups from './pages/Groups';
import User from './pages/User';
import Main from './pages/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      isUserLogIn: false,
      isRegistarationActive: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.showRegestraion = this.showRegestraion.bind(this);
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
  showRegestraion() {
    this.setState({
      isRegistarationActive: true
    })
  }
  render() {
    const {isUserLogIn, isRegistarationActive} = this.state
    return (
      isUserLogIn ? <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        pullRight={true}
        styles={{ sidebar: { background: "white" } }}
      >
      <Router>
        <Route exact path="/" component={() => <Main /> } />
        <Route path="/groups" component={() => <Groups /> } />
        <Route path="/user" component={() => <User/> } />
        <Footer />
      </Router>
    </Sidebar> :
      <div className="welcome-screen">
      {!isRegistarationActive 
        ?<Login login={this.login} showRegestraion={this.showRegestraion}/>
        : <Registration />
      }
      </div>
    );
  }
}

export default App;
