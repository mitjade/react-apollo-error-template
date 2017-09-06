import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

class App extends Component {
  render() {

    console.log(this.props);

    const { data: { loading, people } } = this.props;
    return (
      <div>

        {loading ? (
          <p>Loading…</p>
        ) : (
          <ul>
            {people.map(person => (
              <li key={person.id}>
                {person.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default graphql(
  gql`{
    people {
      id
      name
    }
  }`,
)(App)
