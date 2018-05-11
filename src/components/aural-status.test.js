import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Renders an aural status update', () => { 
    let wrapper = shallow(<AuralStatus auralStatus={'bro'} />);
    expect(wrapper.contains('bro')).toEqual(true);
  });
});