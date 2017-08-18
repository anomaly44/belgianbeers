import React from 'react';
import App  from '../App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  console.log('Test running');
  it('renders without crashing(enzyme)', () => {
    shallow(<App/>);
  });
});
