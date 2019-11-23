import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import PoliticasPrivacidad from '../containers/PoliticasPrivacidad';
import TerminosCondiciones from '../containers/TerminosCondiciones';
import Acercade from '../containers/Acercade';
import NotFoud from '../containers/NotFound';
import Layout from '../components/Layout';
import Register from '../containers/Register';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/politicasPrivacidad" component={PoliticasPrivacidad} />
        <Route exact path="/terminosycondiciones" component={TerminosCondiciones} />
        <Route exact path="/acercade" component={Acercade} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFoud} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;