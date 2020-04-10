/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Button, Drawer } from '@material-ui/core';
import messages from './messages';

function Layout(props) {
  const [drawerOpen, setdrawerOpen] = React.useState(false);

  const toggleDrawer = () => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setdrawerOpen(!drawerOpen);
  };

  return (
    <React.Fragment>
      <Drawer open={drawerOpen} onClose={toggleDrawer()}>
        drawer content
      </Drawer>
      <div>
        <FormattedMessage {...messages.header} />
        <Button onClick={toggleDrawer()}>Open drawer</Button>
        Toolbar, sidebar, backdrop
      </div>
      <main>{props.children}</main>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;
