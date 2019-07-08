import React from 'react';
import renderer from 'react-test-renderer';
import EventDetails from '../../screens/eventDetails/EventDetails';
import Store from '../../config/ReduxStore'
import { Provider } from 'react-redux';

describe('Testing events details', () => {
  it('renders correctly', () => {
    const event = {
      title: 'Event',
      image: 'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
      startAt: '2019-07-22T19:01:33.476Z',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.'
    }
    const tree = renderer
      .create(
        <Provider store={Store}>
          <EventDetails  {...event} />
        </Provider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});