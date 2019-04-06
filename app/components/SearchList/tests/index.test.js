import React from 'react';
import {shallow} from 'enzyme';

import Search from '../index';

describe('<Search />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Search />);
    expect(renderedComponent.length).toEqual(1);
  });
});
