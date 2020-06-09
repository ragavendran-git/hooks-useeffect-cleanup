import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import IngredientForm from './IngredientForm';

configure({ adapter: new Adapter() });

it("Should call input onChange function when user enter in input", () => {
    const wrapper = mount(<IngredientForm/>);

    wrapper.find("#title").simulate("change", {
        target: { value: "Ingredient 1" },
    });
    wrapper.find("#amount").simulate("change", {
        target: { value: "40" },
    });

    expect(wrapper.find("#title").props().value).toEqual("Ingredient 1"); 
    expect(wrapper.find("#amount").props().value).toEqual("40"); 
});
it("Should call submitHandler function when form is submitted", () => {
    const onAddIngredient = jest.fn();
    const fakeEvent = { preventDefault: () => {} };
    const wrapper = shallow(<IngredientForm onAddIngredient={onAddIngredient}/>);
    const form = wrapper.find("form");
    
    form.simulate("submit", fakeEvent);
    expect(onAddIngredient).toHaveBeenCalled();
});