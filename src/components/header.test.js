import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('generates aural update and restarts game ', () => { 
    let wrapper = shallow(<Header />);
    //finish it
  });