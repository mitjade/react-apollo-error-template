import React, { Component } from 'react';
import { gql, graphql, withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom'

class Logout extends Component {

  async resetStore() {
    await this.props.client.resetStore();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><button onClick={() => this.resetStore()}>Logout</button></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(withApollo((Logout)))
