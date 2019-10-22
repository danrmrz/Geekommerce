import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <switch>
        <Route exact path="/" component={Home} />
      </switch>
    </Layout>
  </BrowserRouter>
);

export default App;