/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import QuivrPage from 'containers/QuivrPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Layout from 'components/Layout';
import GlobalStyle from '../../global-styles';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={QuivrPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Layout>
  );
}

export default App;
