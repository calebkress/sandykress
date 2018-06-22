import React, { Component } from 'react';

import { CenteredHeader } from '../App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>This will be a basic header.</CenteredHeader>
        <p>
          Here's the first part of your "about me."
        </p>
        <p>
          This is "about me" part two.
        </p>
        <p>
          Here's a third section for "about me."
        </p>
      </div>
    );
  }
}
export default Home;
