import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
<<<<<<< HEAD
=======
import PoliticasPrivacidad from '../containers/PoliticasPrivacidad';
import TerminosCondiciones from '../containers/TerminosCondiciones';
import Acercade from '../containers/Acercade';
>>>>>>> footer
import NotFoud from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
<<<<<<< HEAD
        <Route exact path='/' component={Home} />
=======
        <Route exact path="/" component={Home} />
        <Route exact path="/politicasPrivacidad" component={PoliticasPrivacidad} />
        <Route exact path="/terminosycondiciones" component={TerminosCondiciones} />
        <Route exact path="/acercade" component={Acercade} />
>>>>>>> footer
        <Route component={NotFoud} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;