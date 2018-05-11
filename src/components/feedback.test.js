import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Renders some feedback', () => {
    let wrapper = shallow(<Feedback feedback={'listening to a game'} />);
    expect(wrapper.contains('listening to a game')).toEqual(true);
 	
	});
});

