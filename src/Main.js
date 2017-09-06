import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import App from './App';
import Logout from './Logout';

class Main extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
          <Switch>
            <Route exact path='/logout' component={Logout}/>
            <Route path='/' component={App}/>
          </Switch>
          <nav>
            <ul>
              <li><Link to='/logout'>Logout Page</Link></li>
              <li><Link to='/'>Home</Link></li>
            </ul>
          </nav>
        </header>
      </main>
    );
  }
}

export default (Main)
