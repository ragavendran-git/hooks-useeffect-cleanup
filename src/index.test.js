import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from './App';
import AuthContextProvider from './context/auth-context';

configure({ adapter: new Adapter() });

test('should login to the app', () => {
  const wrapper = mount(<AuthContextProvider>
      <App />
    </AuthContextProvider>);
  
  //before login
  expect(wrapper.find('div.auth')).toHaveLength(1);
  
  //after login
  wrapper.find('button').simulate('click');
  expect(wrapper.find('div.App')).toHaveLength(1);
});