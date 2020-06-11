import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Search from './Search';

configure({ adapter: new Adapter() });

//global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, name: 'Item 1'}));

// const setState = jest.fn();
// const useStateSpy = jest.spyOn(React, 'useState')
// useStateSpy.mockImplementation((init) => [init , setState]);

test('Should call onLoadIngredients function', () => {
    const wrapper = mount(<Search/>);

    wrapper.find("input").simulate("change", {
        target: { value: "Ingredient 1" },
    });
});
