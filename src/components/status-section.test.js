import React from 'react';
import { shallow } from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection />);
  });

  it('generates aural update and restarts game ', () => { 
    let wrapper = shallow(<StatusSection />);
    //finish it
  });