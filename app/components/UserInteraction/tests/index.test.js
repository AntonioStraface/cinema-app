import React from 'react';
import {shallow} from 'enzyme';

import UserInteraction from '../index';

describe('<UserInteraction />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<UserInteraction />);
    expect(renderedComponent.length).toEqual(1);
  });
});
