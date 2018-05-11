import React from 'react';
import { shallow } from 'enzyme';

import Game from './game';

describe('<Game />', () => {

  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('Can start a new game', () => {

    const wrapper = shallow(<Game />);
    // simulating an existing game
    wrapper.setState({
      guesses: [1, 2, 3, 4],
      feedback: 'Awesome',
      correctAnswer: 7,
      auralStatus: 'hot!'
    });

    // this is what you are testing, starting a new game
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess2!');
    expect(wrapper.state('auralStatus')).toEqual('');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);

  });

   it('Lets users make a guess', () => {

      const wrapper = shallow(<Game />);

      wrapper.setState({
      guesses: [1, 2, 3, 4],
      feedback: 'Awesome',
      correctAnswer: 7,
      auralStatus: 'hot!'
    });

     // this is what you are testing
     wrapper.instance().makeGuess(50);
     expect(wrapper.state('guesses')).toEqual([1, 2, 3, 4, 50]);



  });


}); //describe