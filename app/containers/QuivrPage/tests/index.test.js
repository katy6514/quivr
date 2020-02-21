import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import QuivrPage from '../index';

describe('<QuivrPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <QuivrPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
