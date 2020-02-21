/**
 *
 * Layout
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Layout(props) {
  return (
    <React.Fragment>
      <div>
        <FormattedMessage {...messages.header} />
        Toolbar, sidebar, backdrop
      </div>
      <main>{props.children}</main>
    </React.Fragment>
  );
}

Layout.propTypes = {};

export default Layout;
