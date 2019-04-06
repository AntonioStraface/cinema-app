/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import {Helmet} from 'react-helmet';
import {Switch, Route} from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Details from 'containers/Details/Loadable';
import './style.scss';

const App = () => (
  <main className="app-wrapper">
    <Helmet titleTemplate="%s - Cinema APP" defaultTitle="Cinema APP">
      <meta name="description" content="Cinema APP" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/Details/:id" component={Details} />
    </Switch>
  </main>
);

export default App;
