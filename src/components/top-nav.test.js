import React from 'react';
import { shallow } from 'enzyme';

import TopNav from './top-nav';

describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('generates aural update and restarts game ', () => { 
    let wrapper = shallow(<TopNav />);
    //finish it
  });