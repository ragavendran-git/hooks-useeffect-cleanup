import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";
import React from 'react';

import LoadingIndicator from './LoadingIndicator';

configure({ adapter: new Adapter() });

it("Should render correctly", () => {
    const wrapper = shallow(<LoadingIndicator />);
    expect(toJson(wrapper)).toMatchSnapshot();
});