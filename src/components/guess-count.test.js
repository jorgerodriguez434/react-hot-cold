import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders some count', () => {
    let wrapper = shallow(<GuessCount guessCount={5} />);
    expect(wrapper.contains(5)).toEqual(true);
 	
	});
});