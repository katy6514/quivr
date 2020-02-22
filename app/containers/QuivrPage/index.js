/*
 * QuivrPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import QuivrTable from '../../components/QuivrTable';

function QuivrPage() {
  return (
    <React.Fragment>
      <FormattedMessage {...messages.header} />
      <QuivrTable />
    </React.Fragment>
  );
}

export default QuivrPage;
