import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Ingredients from './Ingredients';
import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

configure({ adapter: new Adapter() });

describe('<TestComponent />', () => {
    //global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, name: 'Item 1'}));

    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init , setState]);

    beforeEach(() => {
        wrapper = shallow(<Ingredients />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should filter ingredients', () => {
        const filteredIngredients = [
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

        wrapper.find(Search).invoke('onLoadIngredients')(filteredIngredients);
        expect(setState).toHaveBeenCalledWith(filteredIngredients);
    });

    // test('Should add ingredient', () => {
    //     const ingredient = {
    //         title: 'Ingredient 1',
    //         amount: 40
    //     };

    //     wrapper.find(IngredientForm).invoke('onAddIngredient')(ingredient);
    //     expect(setState).toHaveBeenCalled();
    // });

    test('Should remove ingredient', () => {
        wrapper.find(IngredientList).invoke('onRemoveItem')(1);
        expect(setState).toHaveBeenCalled();
    });
});
