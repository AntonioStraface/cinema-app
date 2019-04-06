import React from 'react';
import {shallow} from 'enzyme';

import Article from '../index';

describe('<Article />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Article />);
    expect(renderedComponent.length).toEqual(1);
  });
});
