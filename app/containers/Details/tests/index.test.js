import React from 'react';
import {shallow} from 'enzyme';

import Header from 'components/Header';

describe('<Details />', () => {
  it('find header', () => {
    const userInteraction = shallow(<Header />);
    expect(userInteraction.length).not.toBe(0);
  });
});
