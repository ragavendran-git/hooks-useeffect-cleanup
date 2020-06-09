import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";
import React from 'react';

import ErrorModal from './ErrorModal';

configure({ adapter: new Adapter() });

it("Should render correctly", () => {
    const wrapper = shallow(<ErrorModal />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it("Should call onCloseHandler function", () => {
    const onCloseHandler = jest.fn();
    const wrapper = mount(<ErrorModal onClose={onCloseHandler}/>);

    wrapper.find("button").simulate("click");
    expect(onCloseHandler).toHaveBeenCalled();
});