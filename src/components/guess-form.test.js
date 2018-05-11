import React from 'react';
import { shallow } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('can invoke onSubmit function ', () => { 
    let wrapper = shallow(<GuessForm />);
    //finish it
  });


});