import React from 'react';
import { shallow } from 'enzyme';

import InfoSection from './info-section';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoSection />);
  });

  it('generates aural update and restarts game ', () => { 
    let wrapper = shallow(<InfoSection />);
    //finish it
  });