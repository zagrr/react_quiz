import React, { Component } from 'react';

import Layout from "./Components/Layout";
import Quiz from "./Components/Quiz";

class App extends Component {
  render() {
    return (
      <Layout>
        <Quiz/>
      </Layout>

    );
  }
}

export default App;
