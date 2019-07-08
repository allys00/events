import React from 'react';
import renderer from 'react-test-renderer';
import EventDetails from '../../screens/eventDetails/EventDetails';
import Store from '../../config/ReduxStore'
import { Provider } from 'react-redux';

describe('Testing events details', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={Store}>
          <EventDetails />
        </Provider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});