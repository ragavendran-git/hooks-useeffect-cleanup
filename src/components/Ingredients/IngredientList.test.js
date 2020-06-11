import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import IngredientList from './IngredientList';

configure({ adapter: new Adapter() });

it("Should display list items", () => {
    const removeIngredientHandler = jest.fn();
    const userIngredients = [
        {
            id: 1,
            title: 'Ingredient 1',
            amount: 40
        },
        {
            id: 2,
            title: 'Ingredient 2',
            amount: 50
        }
    ];
    const wrapper = mount(<IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>);
    expect(wrapper.find("li")).toHaveLength(2);
    
    wrapper.find("li").first().simulate("click");
    expect(removeIngredientHandler).toHaveBeenCalled();
});